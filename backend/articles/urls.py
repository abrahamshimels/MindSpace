from django.urls import path
from .views import ArticleListView, ArticleDetailView

urlpatterns = [
    path('', ArticleListView.as_view(), name='article-list'),
    path('<uuid:pk>/', ArticleDetailView.as_view(), name='article-detail'),
]
