from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q
import shutil


# Create your models here.
def get_file_location(instance, filename):
    current_location = instance.folder
    path = ""
    while current_location:
        path = f"/{current_location.name}" + path
        current_location = current_location.folder

    return f"files/{instance.folder.user.username}{path}/{filename}"



def get_folder_location(current_folder):
    username = current_folder.user.username
    path = ""
    while current_folder:
        path = f"/{current_folder.name}" + path
        current_folder = current_folder.folder
    return f"media/files/{username}{path}"


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
            models.UniqueConstraint(
                fields=["user", "name"],
                condition=Q(folder=None),
                name="unique_user_folder",
            ),
        ]

    def delete(self, *args, **kwargs):
        shutil.rmtree(get_folder_location(self))
        super().delete(*args, **kwargs)


class File(models.Model):
    folder = models.ForeignKey(
        Folder, on_delete=models.CASCADE, null=True, related_name="allfiles"
    )
    files = models.FileField(upload_to=get_file_location)
    filename = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f"{self.files}"

    def save(self, *args, **kwargs):
        if not self.pk:  
            self.filename = self.files.name
            self.folder.user.profile.used_storage += self.files.size
            self.folder.user.profile.save()
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        file_size = self.files.size
        super().delete(*args, **kwargs)  
        self.folder.user.profile.used_storage -= file_size
        self.folder.user.profile.save()
