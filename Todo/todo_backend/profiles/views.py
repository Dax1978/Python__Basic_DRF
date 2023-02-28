from django.views import generic
from .models import Profile


class ProfileListView(generic.ListView):
    queryset = Profile.objects.select_related('user')