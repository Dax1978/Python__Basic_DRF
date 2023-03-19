from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True, null=False)
    # bio = models.CharField(max_length=160, null=True, blank=True)
    # birthday = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.username


# class Profile(models.Model):
#     user = models.OneToOneField(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE
#     )
#     bio = models.CharField(
#         max_length=160,
#         null=True,
#         blank=True
#     )
#     birthday = models.DateField(
#         null=True,
#         blank=True
#     )
#
#     def __str__(self):
#         return self.user.username