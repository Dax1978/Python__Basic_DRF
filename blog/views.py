from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer
from .filters import ArticleFilter


# 1-ый уровень: Используем класс APIView
"""
Базовые View удобно использовать для решения нестандартных задач,
которые требуют написания множества уникального кода
"""
from rest_framework.views import APIView

# 2-ой уровень: Используем класс GenericAPIVIew
"""
Этот класс наследуется от APIView и содержит в себе наиболее общие свойства и
методы, такие как queryset, get_queryset и serializer_class. Таким образом,
подразумевается, что мы уже работаем с некоторым набором данных и классом
для их сериализации
При добавлении некоторых классов примесей (mixins) и использования GenericAPIView
можно получить конкретные классы для той или иной задачи (REST-запроса)

Эта группа классов применяется практически всегда как по отдельности,
так и в наборах views (Viewsets)
Она позволяет решать большинство практических задач. Для этого нужно:
    1. Выбрать нужный класс для конкретной задачи и типа REST-запроса.
    2. Создать свой view путём наследования от этого класса.
    3. Связи с url-адресом.
    4. При необходимости переопределить доступные методы

Другие классы — комбинация рассмотренных
Например: ListCreateAPIView для списка и создания
"""
from rest_framework.generics import CreateAPIView
from rest_framework.generics import ListAPIView
from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import DestroyAPIView
from rest_framework.generics import UpdateAPIView


# 3-ий уровень: Используем класс ViewSets
"""
ViewSets (наборы представлений) позволяют объединять несколько представлений в
один набор. Причём можно или описать нужные методы для обработки запросов
самостоятельно, или использовать ModelViewSet для создания набора на основе
конкретной модели. Можно также собрать ViewSet из нескольких Views

Чаще используются ModelViewSet и Custom Viewset. ModelViewSet удобен, когда
нужно большинство методов для одной модели данных, а Custom Viewset — при
необходимости только части методов для API. Класс ViewSet используется реже
для нестандартных задач и нескольких типов rest-запросов
"""
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework import mixins

from rest_framework.pagination import LimitOffsetPagination


"""Используем класс APIView"""
class ArticleAPIVIew(APIView):
    renderer_classes = [JSONRenderer]

    # Метод get отвечает за get-запрос
    def get(self, request, format=None):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        # Важно! Для ответа используется объект класса Respose из DRF, а не из django
        return Response(serializer.data)


"""Используем класс GenericAPIView"""
# Предоставляет метод post
# Для создания модели достаточно указать queryset и serializer_class
class ArticleCreateAPIView(CreateAPIView):
    renderer_classes = [JSONRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Предоставляет метод get и выводит список данных из выборки queryset
class ArticleListAPIView(ListAPIView):
    renderer_classes = [JSONRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Выдаёт метод get и выводит данные об одном объекте из выборки queryset
# Для указания адреса требуется параметр pk, чтобы определить id элемента
# Например (в urls.py):
# path('generic/retrieve/<int:pk>/', views.ArticleRetrieveAPIView.as_view())
class ArticleRetrieveAPIView(RetrieveAPIView):
    renderer_classes = [JSONRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Предоставляет метод delete и удаляет один объект из выборки
# Для указания адреса требуется параметр pk, чтобы определить id элемента
class ArticleDestroyAPIView(DestroyAPIView):
    renderer_classes = [JSONRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Выдаёт методы put и patch для изменения объекта из выборки queryset
# Для указания адреса требуется параметр pk, чтобы определить id элемента
class ArticleUpdateAPIView(UpdateAPIView):
    renderer_classes = [JSONRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


"""Используем класс ViewSets"""
# Класс ViewSet в DRF позволяет на его основе создавать набор данных и
# прописывать важные методы для обработки разных типов запросов
# В этом примере определены методы list и retrieve
# Они соответствуют get-запросам для получения набора данных и информации об
# одном объекте. Сами методы реализуем сами с помощью модели Article,
# ArticleSerializer и Response. Это похоже на работу с APIView, но в этом
# случае в одном ViewSet можно описать обработку сразу нескольких REST-запросов
class ArticleViewSet(viewsets.ViewSet):
    renderer_classes = [JSONRenderer]

    @action(detail=True, methods=['get'])
    def article_text_only(self, request, pk=None):
        article = get_object_or_404(Article, pk=pk)
        return Response({'article.text': article.text})

    def list(self, request):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        article = get_object_or_404(Article, pk=pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
# После того как создали Viewset, удобно использовать Router
# который сам позаботится о создании адресов для нашего REST API

# GenericViewSet
# Этот класс добавляет методы get_queryset и get_object для работы с данными и
# используется как основа для построения Viewsets из нескольких View

# ModelViewSet
# Этот класс основан на GenericViewSet и позволяет быстро построить API
# для модели данных. Это полезно в тех случаях, когда нужны почти все
# REST API-запросы для конкретной модели
class ArticleModelViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    renderer_classes = [JSONRenderer]
    serializer_class = ArticleSerializer

# Custom ViewSet
# Один из наиболее удобных видов Viewset — Viewset, собранный из нескольких примесей (mixins)
# Примеси могут быть взяты из DRF, так и являться своими классами
class ArticleCustomViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
# Основа — GenericViewSet. К нему добавляются нужные классы примеси
# Таким образом, от того, какие примеси добавлены, будет зависеть доступность
# запросов REST API. В этом примере добавился CreateModelMixen, ListModelMixin,
# RetrieveModelMixin. Это означает, что нам будут доступны запросы get и post
# Появятся возможности создавать новые записи, просматривать список или одну
# запись. Далее стандартно указывается queryset и serializer_class
# Урлы для этого Viewset генерируются также через Router

class ArticleQuerysetFilterViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Article.objects.all()

    def get_queryset(self):
        return Article.objects.filter(name__contains='python')

class ArticleKwargsFilterView(ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        name = self.kwargs['name']
        return Article.objects.filter(name__contains=name)

class ArticleParamFilterViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        articles = Article.objects.all()
        if name:
            articles = articles.filter(name__contains=name)
        return articles

class ArticleDjangoFilterViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filterset_fields = ['name', 'user']

class ArticleCustomDjangoFilterViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filterset_class = ArticleFilter

"""
Фильтрация становится возможна благодаря переопределению метода get_queryset и
передачи параметров во views. Однако переопределение get_queryset удобно только
в небольших проектах. В большинстве случаев удобно пользоваться django-filter
для быстрого создания сложных настраиваемых фильтров
"""


class ArticleLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2

class ArticleLimitOffsetPaginatonViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    pagination_class = ArticleLimitOffsetPagination