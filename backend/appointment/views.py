from rest_framework import generics, permissions
from .models import Appointment
from .serializers import AppointmentSerializer

class AppointmentListCreateView(generics.ListCreateAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role == 'counselor':
            return Appointment.objects.filter(counselor=user)
        return Appointment.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class AppointmentCancelView(generics.UpdateAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Appointment.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(status='cancelled')
