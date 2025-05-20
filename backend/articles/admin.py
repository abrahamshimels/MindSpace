from django.contrib import admin

# Register your models here.

from .models import Article # Import the actual model name, which is WellnessEntry

admin.site.register(Article)
