from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.pagination import LimitOffsetPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone

from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .filters import ProjectFilter, TodoDateFilter

# Для локального переопределения прав
# from rest_framework.permissions import IsAuthenticated, AllowAny
# from rest_framework.views import APIView
# class ExampleView(APIView):
#     permission_classes = [AllowAny]


# Create your views here.
class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class ProjectModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    # filterset_fields = ['name']
    filterset_class = ProjectFilter


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ToDoModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer    
    pagination_class = TodoLimitOffsetPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['project']
    search_fields = ['=project', 'title', 'status', 'user', 'created', 'updated']
    ordering_fields = ['project', 'id']
    ordering = ['id']
    filterset_class = TodoDateFilter
    # /api/employees?department=Human Resources&min_age=25&max_age=32

    """
    def get_queryset(self):
        project = self.request.query_params.get('project')
        todos = ToDo.objects.all()
        if (project is not None) and (self.isint(project)):
            todos = todos.filter(project=project)
            # Текущий пользователь
            # print(self.request.user)
        return todos

    def isint(self, s):
        try:
            int(s)
            return True
        except ValueError:
            return False
    """

    def destroy(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.status = False
        todo.updated = timezone.now()
        todo.save()
        return Response(status=status.HTTP_204_NO_CONTENT)