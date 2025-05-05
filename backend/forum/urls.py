from django.urls import path
from .views import ForumPostListCreateView, ForumReplyCreateView

urlpatterns = [
    path('<str:topic>/posts/', ForumPostListCreateView.as_view(), name='forum-topic-posts'),
    path('posts/<uuid:post_id>/replies/', ForumReplyCreateView.as_view(), name='forum-post-replies'),
]
