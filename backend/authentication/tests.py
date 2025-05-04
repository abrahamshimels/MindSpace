from django.test import TestCase, Client, RequestFactory
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import User
from datetime import date
from rest_framework_simplejwt.tokens import AccessToken
from .middleware import JWTAuthenticationMiddleware
import json

class AuthenticationTests(APITestCase):
    def setUp(self):
        self.client = Client()
        self.register_url = reverse('register')
        self.login_url = reverse('login')
        self.user_data = {
            'email': 'test@example.com',
            'username': 'testuser',
            'password': 'testpass123',
            'dob': '2000-01-01',
            'role': 'youth'
        }

    def test_user_registration(self):
        response = self.client.post(self.register_url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(email='test@example.com').exists())

    def test_user_login(self):
        # First register a user
        self.client.post(self.register_url, self.user_data, format='json')
        
        # Then try to login
        login_data = {
            'email': 'test@example.com',
            'password': 'testpass123'
        }
        response = self.client.post(self.login_url, login_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_invalid_login(self):
        login_data = {
            'email': 'wrong@example.com',
            'password': 'wrongpass'
        }
        response = self.client.post(self.login_url, login_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_protected_endpoint_access(self):
        # Register and login
        self.client.post(self.register_url, self.user_data, format='json')
        login_data = {
            'email': 'test@example.com',
            'password': 'testpass123'
        }
        login_response = self.client.post(self.login_url, login_data, format='json')
        token = login_response.data['access']

        # Try to access a protected endpoint with token
        headers = {'HTTP_AUTHORIZATION': f'Bearer {token}'}
        response = self.client.get('/api/auth/protected/', **headers)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invalid_token_access(self):
        headers = {'HTTP_AUTHORIZATION': 'Bearer invalid_token'}
        response = self.client.get('/api/protected/', **headers)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_missing_token_access(self):
        response = self.client.get('/api/auth/protected/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

class JWTAuthenticationMiddlewareTest(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123',
            email='test@example.com',
            dob=date(2000, 1, 1),
            role='youth'
        )
        self.middleware = JWTAuthenticationMiddleware(lambda r: r)

    def test_unprotected_endpoints(self):
        """Test that login and register endpoints bypass authentication"""
        for path in ['/api/auth/login/', '/api/auth/register/']:
            request = self.factory.get(path)
            response = self.middleware(request)
            self.assertEqual(response, request)

    def test_no_token_provided(self):
        """Test response when no token is provided"""
        request = self.factory.get('/api/protected/')
        response = self.middleware(request)
        self.assertEqual(response.status_code, 401)
        self.assertEqual(json.loads(response.content), {'error': 'No token provided'})

    def test_invalid_token_format(self):
        """Test response when token format is invalid"""
        request = self.factory.get('/api/protected/', HTTP_AUTHORIZATION='InvalidToken')
        response = self.middleware(request)
        self.assertEqual(response.status_code, 401)
        self.assertEqual(json.loads(response.content), {'error': 'No token provided'})

    def test_valid_token(self):
        """Test successful authentication with valid token"""
        token = AccessToken.for_user(self.user)
        request = self.factory.get(
            '/api/protected/',
            HTTP_AUTHORIZATION=f'Bearer {token}'
        )
        response = self.middleware(request)
        self.assertEqual(response, request)
        self.assertEqual(request.user, self.user)

    def test_invalid_token(self):
        """Test response when token is invalid"""
        request = self.factory.get(
            '/api/protected/',
            HTTP_AUTHORIZATION='Bearer invalid.token.here'
        )
        response = self.middleware(request)
        self.assertEqual(response.status_code, 401)
