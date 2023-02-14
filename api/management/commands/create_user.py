from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string

class Command(BaseCommand):
    help = 'Создание пользователя'

    def add_arguments(self, parser):
        parser.add_argument('login', type=str, help='Имя пользователя')

        # Optional argument
        parser.add_argument('-p', '--password', type=str, help='Пароль', )

    def handle(self, *args, **kwargs):
        username = kwargs['login']
        password = kwargs['password']

        if password:
            User.objects.create_user(username=username, email='', password=password)
        else:
            User.objects.create_user(username=username, email='', password='qwertyuiop')