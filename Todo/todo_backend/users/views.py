from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer, UserModelSerializerFull

from rest_framework import generics
# from django.contrib.auth.models import User


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelSerializerFull
        return UserModelSerializer

    # def get_serializer_class(self):
    #     if self.request.version == '0.2':
    #         return UserModelSerializerFull
    #     return UserModelSerializer

# class UserListAPIView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer
#
#     def get_serializer_class(self):
#         if self.request.version == '0.2':
#             return UserModelSerializerFull
#         return UserModelSerializer

    # def get_serializer_class(self):
    #     if self.request.version == 'v2':
    #         return UserModelSerializerFull
    #     return UserModelSerializer