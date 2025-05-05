from rest_framework import serializers
from .models import WellnessEntry

class WellnessEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = WellnessEntry
        fields = '__all__'
        read_only_fields = ['user', 'timestamp']
