from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .tokens import UpdatedTokenObtainPairView
from .register import Register

urlpatterns = [
    path('token/', UpdatedTokenObtainPairView.as_view(), name='token_access'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('register/', Register.as_view(), name='register'),

]