import uuid
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, dob, role, password=None, **extra):
        if not email: raise ValueError("Email required")
        email = self.normalize_email(email)
        user = self.model(email=email, dob=dob, role=role, **extra)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, dob, role='admin', password=None, **extra):
        extra.setdefault('is_staff', True)
        extra.setdefault('is_superuser', True)
        return self.create_user(email, dob, role, password, **extra)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [('youth','youth'),('counselor','counselor'),('admin','admin')]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    dob = models.DateField()
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['dob','role']    
