from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import UpdatedTokenObtainPairView


urlpatterns = [
    path('token/', UpdatedTokenObtainPairView.as_view(), name='token_access'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]