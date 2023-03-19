from rest_framework import permissions


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return bool(request.user and request.user.is_staff)


class IsOwnerOrReadOnly(permissions.BasePermission):
    # Используем has_object_permission - т.к. мы сравниваем пользователя с конкретной записью объекта в таблице данных
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        # obj.user - user из базы данных
        # request.user - user осуществялющий запрос
        # то есть, если юзер в базе данных obj.user равен юзеру, осуществляющему запрос request.user
        # тогда True - то есть даем доступ
        return obj.user == request.user