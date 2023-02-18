from rest_framework.routers import DefaultRouter
from WebToDo import views


router_todo = DefaultRouter()
router_todo.register('project', views.ProjectModelViewSet)
router_todo.register('todo', views.ToDoModelViewSet)