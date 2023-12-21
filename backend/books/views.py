from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Book
from .serializers import BookSerializer, UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

