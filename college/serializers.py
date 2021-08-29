from django.db.models import fields
from rest_framework import serializers
from drf_queryfields import QueryFieldsMixin
from rest_framework.utils import field_mapping

from college.models import *


"""related fields"""


class SubjectListingField(serializers.RelatedField):
    def to_representation(self, value):
        return [value.subject_code, value.name]


class BranchesListingField(serializers.RelatedField):
    def to_representation(self, value):
        return f"{value.branch_code}"


class YearsListingField(serializers.RelatedField):
    def to_representation(self, value):
        return f"{value.year}"


"""end related fields"""


# college serializer
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


# portion serializer

class PortionSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='portion-detail',
        lookup_field='pk'
    )
    subjects = SubjectListingField(many=True, read_only=True)
    branches = BranchesListingField(many=True, read_only=True)
    years = YearsListingField(many=True, read_only=True)

    class Meta:
        model = Portion
        fields = '__all__'


# faculty serialize
class FacultySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='faculty-detail',
        lookup_field='pk'
    )
    branch_name = serializers.CharField(source='branch.name')

    class Meta:
        model = Faculty
        fields = '__all__'


# G timetable serialize
class GtimetableSerializer(serializers.ModelSerializer):
    branch_code = serializers.CharField(source='branch.branch_code')

    class Meta:
        model = Gtimetable
        fields = '__all__'


class YearSerializer(serializers.ModelSerializer):
    value = serializers.CharField(source='id')
    label = serializers.CharField(source='year')

    class Meta:
        model = Year
        fields = ('value', 'label')
