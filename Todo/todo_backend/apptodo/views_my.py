from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status


class UserTaskModelViewSet(ModelViewSet):
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.status = False
        instance.save()
        # print('instance:', instance.status)
        # try:
        #     instance = self.get_object()
        #     self.perform_destroy(instance)
        # except Http404:
        #     pass
        return Response(status=status.HTTP_204_NO_CONTENT)