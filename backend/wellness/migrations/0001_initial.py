# Generated by Django 5.1.2 on 2025-05-04 07:12

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='WellnessEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mood', models.CharField(choices=[('happy', 'Happy'), ('sad', 'Sad'), ('neutral', 'Neutral'), ('anxious', 'Anxious'), ('angry', 'Angry')], max_length=10)),
                ('sleep_hours', models.FloatField()),
                ('activity_level', models.CharField(choices=[('low', 'Low'), ('moderate', 'Moderate'), ('high', 'High')], max_length=10)),
                ('notes', models.TextField(blank=True, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='wellness_entries', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
