from django.core.exceptions import FieldError
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

from drf_queryfields import QueryFieldsMixin


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'


class CollegeSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    courses = CourseSerializer(Course, many=True, read_only=True)
    branches = BranchSerializer(Branch, many=True, read_only=True)
    # url = serializers.HyperlinkedIdentityField(view_name="college-detail")

    class Meta:
        model = College
        fields = '__all__'


class TextbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Textbook
        fields = '__all__'


class SubjectSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    # portions = PortionSerializer(Portion, many=True, read_only=True)
    # portions = serializers.HyperlinkedRelatedField(many=True, view_name="portion-detail", read_only=True)
    branch_code = serializers.CharField(source='branch.branch_code')
    textbooks = TextbookSerializer(Textbook, many=True, read_only=True)

    class Meta:
        model = Subject
        fields = '__all__'


class GtimetableSerializer(serializers.ModelSerializer):
    branch_code = serializers.CharField(source='branch.branch_code')

    class Meta:
        model = Gtimetable
        fields = '__all__'


class MaterialSerializer(serializers.ModelSerializer):
    contributor_name = serializers.CharField(source='contributor.name')
    contributor_link = serializers.CharField(source='contributor.social_link')

    class Meta:
        model = Material
        fields = '__all__'


class ContributorSerializer(serializers.HyperlinkedModelSerializer):
    materials = MaterialSerializer(Material, many=True, read_only=True)

    class Meta:
        model = Contributor
        fields = '__all__'


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'


class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = '__all__'


# class TextbookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Textbook
#         fields = '__all__'


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
