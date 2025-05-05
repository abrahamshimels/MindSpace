import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('cancelled', 'Cancelled'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments_as_user')
    counselor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments_as_counselor')
    scheduled_for = models.DateTimeField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f"{self.user.email} - {self.scheduled_for} with {self.counselor.email}"
