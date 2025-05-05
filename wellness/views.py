from rest_framework import generics, permissions
from .models import WellnessEntry
from .serializers import WellnessEntrySerializer

class WellnessEntryListCreateView(generics.ListCreateAPIView):
    serializer_class = WellnessEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return WellnessEntry.objects.filter(user=self.request.user).order_by('-timestamp')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
