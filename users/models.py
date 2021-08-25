from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from rest_framework import status
from rest_framework.response import Response
from college.models import College, Branch, Year
from django.http import HttpResponseBadRequest, JsonResponse
from rest_framework.exceptions import APIException


class BranchNotInCollege(APIException):
    status_code = 400
    default_detail = 'Branch must be from the users college'
    default_code = 'bad_request'


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email=email, first_name=first_name, password=password, **other_fields)

    def create_user(self, email, first_name='', password=None, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name,
                          **other_fields)
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name']

    def __str__(self):
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    college = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, related_name='students', null=True, blank=True)
    branch = models.ForeignKey(
        Branch, on_delete=models.DO_NOTHING, null=True, blank=True)
    year = models.ForeignKey(
        Year, on_delete=models.DO_NOTHING, null=True, blank=True)

    def __str__(self):
        return f"{self.user.email} Profile"

    def save(self, force_insert=False, force_update=False, *args, **kwargs):
        if self.branch is not None and self.branch not in self.college.branches.all():
            raise BranchNotInCollege(
                "You must select one of the branch from your own college")
        super(Profile, self).save(
            force_insert=force_insert, force_update=force_update, *args, **kwargs)
