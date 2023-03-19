import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer

# from django.contrib.auth.models import User
# from todo_backend import settings # settings.AUTH_USER_MODEL
from users.models import User

from .views import ProjectViewSet
from .models import Project, Task


class TestProjectViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/todo/projects/')
        view = ProjectViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_create_guest(self):
    #     factory = APIRequestFactory()
    #
    #     request = factory.post('/todo/projects/', {'name': 'Тестовый проект', 'users': [1, 2,]}, format='json')
    #     view = ProjectViewSet.as_view({'post': 'create'})
    #     response = view(request)
    #     self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
    #
    # def test_create_admin(self):
    #     factory = APIRequestFactory()
    #     request = factory.post('/todo/projects/', {'name': 'Тестовый проект', 'users': [1, 2,]}, format='json')
    #     admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
    #     force_authenticate(request, admin)
    #     view = ProjectViewSet.as_view({'post': 'create'})
    #     response = view(request)
    #     self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # def test_get_detail(self):
    #     prj = Project.objects.create(name='Тестовый проект', users=[1, 2,])
    #     client = APIClient()
    #     response = client.get(f'/todo/projects/{prj.id}/')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_edit_guest(self):
    #     prj = Project.objects.create(name='Тестовый проект', users=[1, 2,])
    #     client = APIClient()
    #     response = client.put(f'/todo/projects/{prj.id}/', {'name': 'Тестовый проект', 'users': [1, 2,]})
    #     self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

class TestTodoViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/todo/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        prj = Project.objects.create(name='Тестовый проект', users=[1, 2,])
        task = Task.objects.create(project=prj, title='Тестовая задача', text='Текст тестовой задачи')
        admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        self.client.login(username='admin', password='admin123456')
        response = self.client.put(f'/todo/tasks/{task.id}/', {'title': 'Тестовая задача (скорректирована)', 'text': 'Скорректированный текст тестовой задачи'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        task = Task.objects.get(id=task.id)
        self.assertEqual(task.title, 'Тестовая задача (скорректирована)')

    def test_edit_mixer(self):
        task = mixer.blend(Task)
        admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        self.client.login(username='admin', password='admin123456')
        response = self.client.put(f'/todo/tasks/{task.id}/', {'title': 'Тестовая задача (скорректирована)', 'text': 'Скорректированный текст тестовой задачи'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        task = Task.objects.get(id=task.id)
        self.assertEqual(task.name, 'Тестовая задача (скорректирована)')

