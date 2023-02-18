from django_filters import rest_framework as filters
from .models import Article

# Фильтры рекомендуется создавать в отдельном файле filters.py внутри приложения

class ArticleFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')
    # name = filters.CharFilter(lookup_expr='contains') в этом примере мы
    # указали, что к фильтру в поле name нужно добавить contains для поиска
    # по части имени, а не по полному совпадению

    class Meta:
        model = Article
        fields = ['name']