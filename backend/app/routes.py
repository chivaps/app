from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
from .tokens import UpdatedTokenObtainPairView
from .register import Register
from .todo import TodoView

router = DefaultRouter()
router.register(r'todos', TodoView)

urlpatterns = [
    path('token/', UpdatedTokenObtainPairView.as_view(), name='token_access'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
    path('register/', Register.as_view(), name='register'),

]