from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = u'Создание пользователя'

    def add_arguments(self, parser):
        parser.add_argument('username', type=str, help=u'Имя пользователя')

        # Optional argument
        parser.add_argument('-p', '--password', type=str, help='Пароль для пользователя')
        parser.add_argument('-a', '--admin', action='store_true', help='Создание учетной записи администратора')

    def handle(self, *args, **kwargs):
        arg_username = kwargs['username']
        arg_password = kwargs['password']
        arg_admin = kwargs['admin']

        if not arg_password:
            arg_password = '123'

        if arg_admin:
            User.objects.create_superuser(username=arg_username, email='', password=arg_password)
        else:
            User.objects.create_user(username=arg_username, email='', password=arg_password)