from django.db.models import fields
from djoser.serializers import UserCreateSerializer, UserSerializer
from django.contrib.auth import get_user_model, models
from rest_framework import serializers
from users.models import Profile
User = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('college', 'branch', 'year')


class UserSerializer(UserSerializer):
    profile = ProfileSerializer(Profile, many=False)

    class Meta(UserSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'profile')


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
