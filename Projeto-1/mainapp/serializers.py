from rest_framework import serializers
from accounts.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['allowed_storage', 'used_storage']
