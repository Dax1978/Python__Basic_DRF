from rest_framework.routers import DefaultRouter
from apptodo import views


router_todo = DefaultRouter()

router_todo.register('projects', views.ProjectViewSet)
router_todo.register('tasks', views.TaskViewSet)
# router_todo.register('filter', views.TaskFilterViewSet)
# router_todo.register('djangofilter', views.TaskDjangoFilterViewSet)