from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    CustomUser extends Django's AbstractUser:
      - email: unique identifier
      - dob: date of birth
      - role: one of 'youth', 'counselor', 'admin'
    """
    email = models.EmailField('email address', unique=True)
    dob   = models.DateField('date of birth')
    ROLE_CHOICES = [
        ('youth', 'Youth'),
        ('counselor', 'Counselor'),
        ('admin', 'Admin'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'dob', 'role']

    def __str__(self):
        return f"{self.email} ({self.role})"

