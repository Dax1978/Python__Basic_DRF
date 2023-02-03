from django.db import models

# Create your models here.
class User(models.Model):
    nameuser = models.CharField(max_length=17, unique=True)
    namefirst = models.CharField(max_length=77)
    namelast = models.CharField(max_length=77)
    email = models.EmailField(unique=True)