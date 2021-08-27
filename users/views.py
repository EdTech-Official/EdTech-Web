from djoser.social.views import ProviderAuthView
from django.shortcuts import render
from rest_framework.utils import serializer_helpers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers, status
from django.http import Http404
from users.serializers import ProfileSerializer
from users.models import Profile
from django.contrib.auth import get_user_model
User = get_user_model()


class BlacklistTokenUpdateView(APIView):

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserProfileView(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        profile = self.get_object(request.user.profile.id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, format=None):
        profile = self.get_object(request.user.profile.id)
        serializer = ProfileSerializer(profile,  data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            except ValueError as e:
                message = {"message": e}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomProviderAuthView(ProviderAuthView):

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)

    def post(self, request, *args, **kwargs):
        print(request.data)
        request.data._mutable = True
        request.data['is_active'] = True
        request.data._mutable = False
        print(request.data)
        return super(CustomProviderAuthView, self).post(request, *args, **kwargs)
