from django.urls import path
from .views import AppointmentListCreateView, AppointmentCancelView

urlpatterns = [
    path('', AppointmentListCreateView.as_view(), name='appointment-list-create'),
    path('<uuid:pk>/cancel/', AppointmentCancelView.as_view(), name='appointment-cancel'),
]
