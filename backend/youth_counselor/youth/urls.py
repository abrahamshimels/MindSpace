from django.urls import path
from .views import ArticleListCreateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    RegisterView,
    create_user,
    register_view,
    login_view,
    home_view,
    MyProtectedView,
    ArticleListCreateView,
    ProfileDetailView,
    ProfileUpdateView,
    update_profile,
    ProfileView
)

urlpatterns = [
    # JWT Authentication
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # User Registration/Login
    path('register/', RegisterView.as_view(), name='register'),
    path('create-user/', create_user, name='create_user'),
    path('register-html/', register_view, name='register_html'),
    path('login-html/', login_view, name='login_html'),
    
    # Application Views
    path('home/', home_view, name='home'),
    path('protected/', MyProtectedView.as_view(), name='protected'),
    path('articles/', ArticleListCreateView.as_view(), name='article-list-create'),
    
    # Profile Management
    path('profile/', ProfileDetailView.as_view(), name='profile_detail'),
    path('profile/update/', ProfileUpdateView.as_view(), name='profile_update'),
    path('profile/api/', ProfileView.as_view(), name='profile_api'),
    path('profile/update-form/', update_profile, name='profile_update_form'),
]