# backend/wellness/admin.py

from django.contrib import admin
from authentication.models import CustomUser # Import the actual model name, which is WellnessEntry

admin.site.register(CustomUser)