from django.contrib import admin
from django.urls import path
from .views import (
    FruitAPIView,
    FruitAPIDetailView
)

urlpatterns = [
    path('fruits/', FruitAPIView.as_view()),  # get all
    path('fruits/<int:pk>', FruitAPIDetailView.as_view())  # get, put, path, delete
]
