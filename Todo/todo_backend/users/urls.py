from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserModelViewSet


router_users = DefaultRouter()
router_users.register('users', UserModelViewSet)

urlpatterns = [
    path('users/', include(router_users.urls)),
]
