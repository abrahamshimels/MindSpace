# backend/wellness/admin.py

from django.contrib import admin
from .models import WellnessEntry # Import the actual model name, which is WellnessEntry

admin.site.register(WellnessEntry)