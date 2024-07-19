from rest_framework import serializers
from .models import Todo
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo

        fields = ['id', 'user', 'title', 'completed']

        read_only_fields = ['id', 'user']


class TodoView(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Todo.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

