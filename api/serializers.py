from django.core.exceptions import FieldError
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

from drf_queryfields import QueryFieldsMixin

from college.models import *
from content.models import *


# class CourseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Course
#         fields = '__all__'


"""related fields"""


class SubjectListingField(serializers.RelatedField):
    def to_representation(self, value):
        return f"{value.subject_code}"


class BranchesListingField(serializers.RelatedField):
    def to_representation(self, value):
        return f"{value.branch_code}"


class YearsListingField(serializers.RelatedField):
    def to_representation(self, value):
        return f"{value.year}"


"""end related fields"""


class BranchSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='branch-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Branch
        fields = '__all__'


class BranchForCollegeSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='branch-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Branch
        fields = ['url', 'name', 'branch_code', ]


class CollegeSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='college-detail',
        lookup_field='college_code'
    )
    # courses = CourseSerializer(Course, many=True, read_only=True)
    branches = BranchForCollegeSerializer(Branch, many=True, read_only=True)
    # url = serializers.HyperlinkedIdentityField(view_name="college-detail")

    class Meta:
        model = College
        fields = '__all__'


# class TextbookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Textbook
#         fields = '__all__'


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


class GtimetableSerializer(serializers.ModelSerializer):
    branch_code = serializers.CharField(source='branch.branch_code')
    url = serializers.HyperlinkedIdentityField(
        view_name='gtimetable-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Gtimetable
        fields = '__all__'


# class MaterialSerializer(serializers.ModelSerializer):
#     contributor_name = serializers.CharField(source='contributor.name')
#     contributor_link = serializers.CharField(source='contributor.social_link')

#     class Meta:
#         model = Material
#         fields = '__all__'


class ContributorSerializer(serializers.HyperlinkedModelSerializer):
    # materials = MaterialSerializer(Material, many=True, read_only=True)
    url = serializers.HyperlinkedIdentityField(
        view_name='contributor-detail',
        lookup_field='slug'
    )

    class Meta:
        model = Contributor
        fields = '__all__'


class FacultySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='faculty-detail',
        lookup_field='pk'
    )
    branch_name = serializers.CharField(source='branch.name')

    class Meta:
        model = Faculty
        fields = '__all__'


# class RecommendationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Recommendation
#         fields = '__all__'


class TextbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Textbook
        fields = '__all__'


# class MaterialSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Material
#         fields = '__all__'

# class PortionSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Portion
#         fields = '__all__'


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'first_name', 'last_name',]


# class TimetableSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Timetable
#         fields = '__all__'


# class LectureSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Lecture
#         fields = ['subject', 'start_time', 'end_time', 'teacher']


# class DaySerializer(serializers.ModelSerializer):
#     lectures = LectureSerializer(many=True, read_only=True)
#     class Meta:
#         model = Day
#         fields = "__all__"


# class TimetableSerializer(serializers.ModelSerializer):
#     days = DaySerializer(many=True, read_only=True)
#     class Meta:
#         model = Timetable
#         fields = '__all__'
