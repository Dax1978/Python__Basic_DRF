from django.db import models
# from users.models import User
# from django.contrib.auth.models import User
from todo_backend import settings


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=64, unique=True, null=False)
    repozitory = models.URLField(unique=True, null=True, blank=True)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL)
    # users = models.ManyToManyField(User)

    def __str__(self):
        return f"{self.name}"

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'


class Task(models.Model):
    project = models.ForeignKey(Project, unique=False, on_delete=models.CASCADE, verbose_name='Проект', help_text='Проект, к которому относится задача',)
    title = models.CharField(max_length=64)
    text = models.TextField()
    status = models.BooleanField(default=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, to_field='id', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # user = models.ForeignKey('auth.User', models.PROTECT)
    # user = GenericForeignKey
    # user = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'
        unique_together = (
            ('project', 'title'),
        )
