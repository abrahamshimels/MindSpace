from rest_framework import serializers
from .models import ForumPost, ForumReply

class ForumReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumReply
        fields = ['id', 'content', 'created_at']

class ForumPostSerializer(serializers.ModelSerializer):
    replies = ForumReplySerializer(many=True, read_only=True)

    class Meta:
        model = ForumPost
        fields = ['id', 'topic', 'content', 'created_at', 'replies']
