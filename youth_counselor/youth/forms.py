from django import forms
from django.contrib.auth import get_user_model

User = get_user_model()  # Dynamically fetch the custom user model

class ProfileForm(forms.ModelForm):
    class Meta:
        model = User  # Use the dynamically fetched user model
        fields = ['role', 'email', 'bio']