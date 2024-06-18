from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q


# Create your models here.
def get_file_location(instance, filename):
    return f"files/{instance.folder.user.username}/{instance.folder.name}/{filename}"


class Folder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="folders")
    name = models.CharField(max_length=200)
    folder = models.ForeignKey(
        "self", on_delete=models.CASCADE, null=True, related_name="folders_within"
    )

    def __str__(self):
        return f"{self.user} - {self.name}"

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["folder", "name"], name="unique_folder_name"
            ),
            models.UniqueConstraint(fields=["user", "name"], condition=Q(folder=None), name="unique_user_folder"),
        ]


class File(models.Model):
    folder = models.ForeignKey(
        Folder, on_delete=models.CASCADE, null=True, related_name="allfiles"
    )
    files = models.FileField(upload_to=get_file_location)
    filename = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f"{self.files}"
    
    def save(self, *args, **kwargs):
        self.filename = self.files.name
        super().save(*args, **kwargs)

