from django.db import models
from django.conf import settings

class WellnessEntry(models.Model):
    MOOD_CHOICES = [
        ('happy', 'Happy'),
        ('sad', 'Sad'),
        ('neutral', 'Neutral'),
        ('anxious', 'Anxious'),
        ('angry', 'Angry'),
    ]

    ACTIVITY_LEVEL_CHOICES = [
        ('low', 'Low'),
        ('moderate', 'Moderate'),
        ('high', 'High'),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='wellness_entries'
    )
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES)
    sleep_hours = models.FloatField()
    activity_level = models.CharField(max_length=10, choices=ACTIVITY_LEVEL_CHOICES)
    notes = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        # Change self.user.username to self.user.email
        # Or simply self.user if your CustomUser model has a proper __str__ method
        return f"{self.user.email} - {self.mood} on {self.timestamp.date()}"