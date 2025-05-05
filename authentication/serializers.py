from rest_framework import serializers
from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email','dob','role','password']
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        return CustomUser.objects.create_user(**validated_data)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['role'] = user.role
        return token
class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField(required=True)