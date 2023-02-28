from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter

from .views import UserModelViewSet #, UserListAPIView


router_users = DefaultRouter()
router_users.register('users', UserModelViewSet)

# app_name = 'users'
urlpatterns = [
    path('users/', include(router_users.urls)),
    # re_path(r'^api/(?P<version>\d\.\d)/users/$', include(router_users.urls)),
    # path('', UserListAPIView.as_view()),
]
