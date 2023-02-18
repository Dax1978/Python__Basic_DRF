from django_filters import rest_framework as filters
from django_filters import NumberFilter
from .models import Project, ToDo

class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']

class TodoDateFilter(filters.FilterSet):
    min_date = NumberFilter(field_name="created", lookup_expr='gte')
    max_date = NumberFilter(field_name="created", lookup_expr='lte')

    class Meta:
        model = ToDo
        fields = ['created']
