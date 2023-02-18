from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter

from blog import views

router_blog = DefaultRouter()
router_blog.register('viewsets', views.ArticleViewSet, basename='article')
router_blog.register('param', views.ArticleParamFilterViewSet)

urlpatterns = [
    path('apiview/view/', views.ArticleAPIVIew.as_view()),
    path('generic/create/', views.ArticleCreateAPIView.as_view()),
    path('generic/view/', views.ArticleListAPIView.as_view()),
    path('generic/retrieve/<int:pk>/', views.ArticleRetrieveAPIView.as_view()),
    path('generic/delete/<int:pk>/', views.ArticleDestroyAPIView.as_view()),
    path('generic/update/<int:pk>/', views.ArticleUpdateAPIView.as_view()),
    path('filters/kwargs/<str:name>/', views.ArticleKwargsFilterView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)