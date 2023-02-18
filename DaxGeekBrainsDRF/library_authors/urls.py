from rest_framework.routers import DefaultRouter
from library_authors import views


router_library = DefaultRouter()
router_library.register('autors', views.AuthorModelViewSet)
router_library.register('biographies', views.BiographyModelViewSet)
router_library.register('articles', views.ArticleModelViewSet)
router_library.register('books', views.BookModelViewSet)