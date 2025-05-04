from django.urls import path
from .views import WellnessEntryListCreateView

urlpatterns = [
    path('', WellnessEntryListCreateView.as_view(), name='wellness-entry'),
]
