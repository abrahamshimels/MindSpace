from rest_framework import generics, permissions
from .models import ForumPost, ForumReply
from .serializers import ForumPostSerializer, ForumReplySerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

class ForumPostListCreateView(generics.ListCreateAPIView):
    serializer_class = ForumPostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        topic = self.kwargs['topic']
        return ForumPost.objects.filter(topic=topic)

    @swagger_auto_schema(
        operation_description="Retrieve forum posts by topic.",
        responses={200: ForumPostSerializer(many=True)}
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_description="Create a new forum post under a specific topic.",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['content'],
            properties={
                'content': openapi.Schema(type=openapi.TYPE_STRING, description='Content of the post'),
            },
        ),
        responses={201: ForumPostSerializer}
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, topic=self.kwargs['topic'])

class ForumReplyCreateView(generics.CreateAPIView):
    serializer_class = ForumReplySerializer
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Add a reply to a specific forum post.",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['content'],
            properties={
                'content': openapi.Schema(type=openapi.TYPE_STRING, description='Content of the reply'),
            },
        ),
        responses={201: ForumReplySerializer}
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    def perform_create(self, serializer):
        post = ForumPost.objects.get(id=self.kwargs['post_id'])
        serializer.save(user=self.request.user, post=post)
