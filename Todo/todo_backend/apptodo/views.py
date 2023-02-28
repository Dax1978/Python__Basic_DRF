from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.pagination import LimitOffsetPagination

from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer
from .permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
from .filters import TaskFilter
from .views_my import UserTaskModelViewSet


class TaskLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2

# # Create your views here.
# class WomenAPIList(generics.ListCreateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     permission_classes = (IsAuthenticatedOrReadOnly, )
#
#
# class WomenAPIUpdate(generics.RetrieveUpdateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     # permission_classes = (IsOwnerOrReadOnly, )
#     permission_classes = (IsAuthenticated,)
#     # Сейчас этот метод можно использовать только при аутентификации по токену
#     # authentication_classes = (TokenAuthentication, )
#
#
# class WomenAPIDestroy(generics.RetrieveDestroyAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     # permission_classes = (IsAdminUser,) # Но так даже просматривать нельзя
#     permission_classes = (IsAdminOrReadOnly, )


# Create your views here.
class ProjectViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]


class TaskViewSet(UserTaskModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    pagination_class = TaskLimitOffsetPagination
    # permission_classes = [IsAuthenticatedOrReadOnly]


class TaskFilterViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        title = self.request.query_params.get('title', '')
        tasks = Task.objects.all()
        if title:
            tasks = tasks.filter(title__contains=title)
        return tasks
    # http://127.0.0.1:8000/todo/filter/?title=прим

class TaskDjangoFilterViewSet(ModelViewSet):
    # renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filterset_fields = ['title', 'text']
    # filterset_class = TaskFilter