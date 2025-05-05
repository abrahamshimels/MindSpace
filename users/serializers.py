from rest_framework import serializers
from authentication.models import CustomUser 
from django.contrib.auth import get_user_model

User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'dob', 'role', 'date_joined']
        read_only_fields = ['id', 'date_joined']
