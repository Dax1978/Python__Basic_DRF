from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=64)
    repozitory = models.URLField(unique=True, null=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return f"{self.name}"


class ToDo(models.Model):    
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=64)
    text = models.TextField()    
    status = models.BooleanField(default=True)
    # user = models.ForeignKey('auth.User', models.PROTECT)
    # user = GenericForeignKey
    user = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"