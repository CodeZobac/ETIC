from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

class Post(models.Model):
    id=models.BigAutoField(primary_key=True)
    title = models.TextField()
    content = models.TextField()
    user=models.ForeignKey(get_user_model(), on_delete=models.CASCADE)