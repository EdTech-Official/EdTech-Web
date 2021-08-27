from users.serializers import ProviderAuthSerializer
from djoser.conf import settings
from social_django.utils import load_backend, load_strategy
from rest_framework import generics, permissions, status
# from djoser.social.views import ProviderAuthView
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


class ProviderAuthView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = ProviderAuthSerializer

    def get(self, request, *args, **kwargs):
        redirect_uri = request.GET.get("redirect_uri")
        if redirect_uri not in settings.SOCIAL_AUTH_ALLOWED_REDIRECT_URIS:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        strategy = load_strategy(request)
        strategy.session_set("redirect_uri", redirect_uri)

        backend_name = self.kwargs["provider"]
        backend = load_backend(strategy, backend_name,
                               redirect_uri=redirect_uri)

        authorization_url = backend.auth_url()
        return Response(data={"authorization_url": authorization_url})
