from django.contrib import admin

from .models import Author, Biography, Book, Article, Post


# Register your models here.
admin.site.register(Author)
admin.site.register(Biography)
admin.site.register(Book)
admin.site.register(Article)
admin.site.register(Post)