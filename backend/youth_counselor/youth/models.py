from django.db import models
from django.conf import settings  # Add this import
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.contrib.auth.models import User

class User(AbstractUser):
    # Add any custom fields or methods you need
    pass

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    bio = models.TextField(blank=True, null=True)
    role = models.CharField(
        max_length=50,
        choices=[('Admin', 'Admin'), ('User', 'User')],
        default='User'
    )
    
    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # Add a custom related_name to avoid conflict
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_permissions_set',  # Add a custom related_name to avoid conflict
        blank=True  
    )   

class Article(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # Now properly referenced
        on_delete=models.CASCADE,
        related_name='articles'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title