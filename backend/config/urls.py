from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from django.views.generic import TemplateView


schema_view = get_schema_view(
   openapi.Info(
      title="MindSpace Forum API",
      default_version='v1',
      description="API documentation for Forum System",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),

    path('appointments/', include('appointment.urls')),
    path('api/wellness/', include('wellness.urls')),
    path('api/articles/', include('articles.urls')),
    path('api/users/', include('users.urls')),
    path('api/forum/', include('forum.urls')),
    path('api/', include('authentication.urls')),

    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
     path('', TemplateView.as_view(template_name='index.html'), name='home'),
]
from django.urls import path
from django.views.generic import TemplateView
