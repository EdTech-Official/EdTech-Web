from rest_framework import serializers
from drf_queryfields import QueryFieldsMixin

from college.models import *

from django_filters.rest_framework import DjangoFilterBackend


class BranchForCollegeSerializer(serializers.ModelSerializer):
    # url = serializers.HyperlinkedIdentityField(
    #     view_name='branch-detail',
    #     lookup_field='pk'
    # )
    value = serializers.IntegerField(source='id')
    label = serializers.CharField(source='name')

    class Meta:
        model = Branch
        fields = ['value', 'label', ]


class CollegeSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='college-detail',
        lookup_field='college_code'
    )
    value = serializers.CharField(source='college_code')
    label = serializers.CharField(source='name')
    branches = BranchForCollegeSerializer(Branch, many=True, read_only=True)

    class Meta:
        model = College
        fields = '__all__'


# branch serializer

class BranchSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='branch-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Branch
        fields = '__all__'


# subject serializer

class PortionForSubjectSerializer(serializers.ModelSerializer):

    url = serializers.HyperlinkedIdentityField(
        view_name='portion-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Portion
        fields = ['url', 'link', ]


class SubjectSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='subject-detail',
        lookup_field='pk'
    )
    portions = PortionForSubjectSerializer(Portion, many=True, read_only=True)

    class Meta:
        model = Subject
        fields = '__all__'
