from django.db.models.signals import post_save
from django.contrib.auth.models import User
from .handler import create_profile

post_save.connect(create_profile, sender=User)