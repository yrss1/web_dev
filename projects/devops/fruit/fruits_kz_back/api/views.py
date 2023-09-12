from rest_framework import generics
from .models import Fruit
from .serializer import FruitSerializer
from django.shortcuts import render


# Create your views here.

class FruitAPIView(generics.ListAPIView):
    queryset = Fruit.objects.all()
    serializer_class = FruitSerializer


class FruitAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Fruit.objects.all()
    serializer_class = FruitSerializer
