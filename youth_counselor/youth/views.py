from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import get_user_model, authenticate, login
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny#, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenBlacklistView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from .serializers import RegisterSerializer         
from rest_framework_simplejwt.exceptions import TokenError

from .models import User  # Assuming you have a custom User model
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .forms import ProfileForm
from django.contrib.auth.decorators import login_required

from .serializers import ProfileSerializer

from rest_framework.generics import CreateAPIView
from .serializers import RegisterSerializer
from rest_framework import generics
#from rest_framework.permissions import IsAuthenticated
from .models import Article
from .serializers import ArticleSerializer
from .permissions import IsAdmin

from rest_framework import serializers
from .models import CustomUser
from django.views.generic import DetailView , UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.viewsets import ModelViewSet

from django.contrib.auth import get_user_model

User = get_user_model()



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer  # <-- This is key!




# --- Class-based registration view using DRF generic ---
class RegisterView(APIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

    def get(self, request, *args, **kwargs):
        # Render an HTML form for registration
        return render(request, 'register.html')

    def post(self, request,*args,**kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # If you want to add a home view, make sure it's a separate function
    def home_view(request):
        return HttpResponse("Welcome to the Home Page!")

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=400)

    user = User.objects.create_user(username=username, password=password)
    refresh = RefreshToken.for_user(user)
    return Response({
        'message': 'User created successfully',
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }, status=201)

class MyProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": f"Hello {request.user.username}!"})

# --- Function-based registration view using serializer ---


# --- Function-based registration with manual validation ---
@api_view(['POST'])
def create_user(request):
    User = get_user_model()
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:
        return Response({"error": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({"error": "Email already exists."}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)







@api_view(['POST'])
@permission_classes([AllowAny]) 
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def login_view(request):
    if request.method == 'POST':
        email= request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            return redirect('home')  # or any page you want
        else:
            return render(request, 'accounts/login.html', {'error': 'Invalid credentials'})
    
    return render(request, 'accounts/login.html')

def token_refresh_view(request):
    return HttpResponse("♻️ Token refresh logic will be here.")


@api_view(['GET'])  # Handles GET requests
@permission_classes([IsAuthenticated])
def home_view(request):
    """
    A simple home view API that returns a welcome message.
    This can be accessed via a GET request.
    """
    data = {"message": "Welcome to the Home View!"}
    return Response(data)




            

"""class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")
            if not refresh_token:
                return Response(
                    {"error": "Refresh token is required"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(
                {"message": "Successfully logged out"},
                status=status.HTTP_200_OK
            )
        except TokenError as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )"""

          
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "message": f"Hello {request.user.username}!",
            "status": "This is a protected route"
 
       })
        
 
class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAdmin]  
    def perform_create(self, serializer):
        # Automatically associate the current user as the author
        serializer.save(author=self.request.user) 
        

class ProfileUpdateView(LoginRequiredMixin, UpdateView):
    model = CustomUser
    template_name = 'profile_update.html'
    fields = ['username', 'email', 'first_name', 'last_name']  # Add your custom fields here
    success_url = '/profile/'

    def get_object(self):
        return self.request.user        

@login_required
def update_profile(request):
    user = request.user
    if request.method == 'POST':
        form = ProfileForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('profile_detail')
    else:
        form = ProfileForm(instance=user)
    return render(request, 'youth/profile_update.html', {'form': form}) 


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = ProfileSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        serializer = ProfileSerializer(request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400) 
    
      
class ProfileDetailView(LoginRequiredMixin, DetailView):
    model = CustomUser
    template_name = 'profile_detail.html'  
    context_object_name = 'profile'
    
    
    def get_object(self):
        return self.request.user    
    

class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticated]  
 
 
class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer     