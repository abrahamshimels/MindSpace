from django.contrib import admin
#from .views import ProtectedView 
from django.urls import path, include
from youth.views import home_view, register_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView, 
    TokenRefreshView,
)

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Social App API",
      default_version='v1',
      description="API documentation for your social app",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="you@example.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Home view
    path('', home_view, name='home'),
     path('youth/', include('youth.urls')),  # Include accounts app URLs

    # Auth API
    path('api/v1/auth/', include('youth.urls')),  # All auth URLs (register, login, logout)
    #path('api/v1/protected-route/', ProtectedView.as_view(), name='protected-route'),
    # JWT endpoints
    path('api/v1/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

   
]
