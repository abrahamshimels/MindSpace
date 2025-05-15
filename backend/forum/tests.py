from django.urls import reverse
from rest_framework.test import APITestCase
from authentication.models import CustomUser

class ForumTests(APITestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(
            email='youth@test.com',
            password='testpass123',
            role=CustomUser.Role.YOUTH
        )
        self.client.force_authenticate(user=self.user)

    def test_create_post(self):
        url = reverse('forum-posts', kwargs={'topic': 'stress'})
        data = {'content': 'Feeling stressed'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data['user'], 'Anonymous')
