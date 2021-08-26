from django.core.exceptions import FieldError
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User

from drf_queryfields import QueryFieldsMixin

from college.models import *
from content.models import *


# class MaterialSerializer(serializers.ModelSerializer):
#     contributor_name = serializers.CharField(source='contributor.name')
#     contributor_link = serializers.CharField(source='contributor.social_link')

#     class Meta:
#         model = Material
#         fields = '__all__'


# class RecommendationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Recommendation
#         fields = '__all__'


# class MaterialSerializer(serializers.ModelSerializer):
#     url = serializers.HyperlinkedIdentityField(
#         view_name='material-detail',
#         lookup_field='pk'
#     )
#     subjects = SubjectListingField(many=True, read_only=True)
#     branches = BranchesListingField(many=True, read_only=True)
#     years = YearsListingField(many=True, read_only=True)

#     class Meta:
#         model = Material
#         fields = '__all__'
