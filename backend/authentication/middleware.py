from django.http import JsonResponse
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError

class JWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.jwt_authenticator = JWTAuthentication()

    def __call__(self, request):
        # Skip authentication for public endpoints
        public_paths = [
            '/',  # root URL
            '/swagger/',  # Swagger UI
            '/redoc/',  # ReDoc
            '/swagger<format>/',  # Swagger schema
            '/api/auth/login/',
            '/api/auth/register/'
        ]
        
        if request.path in public_paths:
            return self.get_response(request)

        try:
            # Try to authenticate the request
            auth_header = request.headers.get('Authorization', '')
            if not auth_header.startswith('Bearer '):
                return JsonResponse({'error': 'No token provided'}, status=401)
            
            token = auth_header.split(' ')[1]
            validated_token = self.jwt_authenticator.get_validated_token(token)
            user = self.jwt_authenticator.get_user(validated_token)
            
            # Attach the user to the request
            request.user = user
            return self.get_response(request)
            
        except (InvalidToken, TokenError) as e:
            return JsonResponse({'error': str(e)}, status=401)
        except Exception as e:
            return JsonResponse({'error': 'Authentication failed'}, status=401) 