from api.filters import SubjectFilter
from rest_framework import serializers
from rest_framework import filters

from django_filters.rest_framework import DjangoFilterBackend

from django.shortcuts import render
from django.http import JsonResponse, Http404
import rest_framework
from rest_framework import pagination

from rest_framework.views import APIView
from rest_framework.generics import (ListAPIView,
                                     ListCreateAPIView, RetrieveAPIView,
                                     RetrieveUpdateDestroyAPIView)
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework import status

from django.contrib.auth.models import User
from .models import *
from .serializers import *
from .mixins import *


# utility classes
class ResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000

# end utility classes


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List Colleges': {
            'path': '/college-list/',
            'params': ['college_code', 'search', 'fields', 'page_size', 'page', 'format'],
            'methods': ['GET']
        },
        'College Detail View': {
            'path': '/textbook-detail/<str:college_code>/',
            'methods': ['GET']
        },
        'List Teachers': {
            'path': '/faculty-list/',
            'params': ['branch', 'is_teaching_staff', 'college', 'page_size', 'page', 'format', 'search'],
            'search_fields': ['name', 'designation'],
            'methods': ['GET']
        },
        'List Courses': '/course-list/',
        'Course Detail View': '/course-detail/<str:pk>/',
        'List Branches': '/branch-list/',
        'Branche Detail View': '/branch-detail/<str:pk>/',
        'List Subjects': '/subject-list/',
        'Subject Detail View': '/subject-detail/<str:pk>/',
        'List Users': '/user-list/',
        'User Detail View': '/user-detail/<str:username>/',
    }

    return Response(api_urls)


""" College """


class CollegeList(ListAPIView):
    """
    List all Subjects [GET]
    """

    # return the list of subjects
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['college_code', ]
    search_fields = ['name', 'college_code', 'location']


class CollegeDetail(RetrieveAPIView):
    """
    Retrieve [GET], update [PUT] or delete [DELETE] a Subject instance.
    """
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
    lookup_field = 'college_code'


""" Course"""


class CourseList(ListAPIView):
    """
    List Courses in a College [GET]
    """

    # return the list of subjects
    serializer_class = CourseSerializer
    pagination_class = ResultsSetPagination
    lookup_url_kwarg = 'college_code'

    def get_queryset(self):
        college_code = self.kwargs.get(self.lookup_url_kwarg)
        courses = Course.objects.filter(college=college_code)
        return courses


class CourseDetail(RetrieveAPIView):
    """
    Retrieve a course in a college [GET]
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_fields = ('college_code', 'course_code',)

    def get_object(self):
        college_code = self.kwargs.get('college_code')
        course_code = self.kwargs.get('course_code')
        college = College.objects.get(college_code=college_code)
        return Course.objects.get(college=college.college_code, course_code=course_code)


""" Branch """


class BranchList(ListAPIView):
    """
    List all Branches in a college [GET]
    """
    # return the list of subjects in a college
    serializer_class = BranchSerializer
    pagination_class = ResultsSetPagination
    lookup_url_kwarg = 'college_code'

    def get_queryset(self):
        college_code = self.kwargs.get(self.lookup_url_kwarg)
        courses = Branch.objects.filter(college=college_code)
        return courses


class BranchDetail(RetrieveAPIView):
    """
    Retrieve a course in a college [GET]
    """
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    lookup_fields = ('college_code', 'branch_code',)

    def get_object(self):
        college_code = self.kwargs.get('college_code')
        branch_code = self.kwargs.get('branch_code')
        college = College.objects.get(college_code=college_code)
        return Branch.objects.get(college=college.college_code, branch_code=branch_code)


""" Subject """


class SubjectList(ListAPIView):
    """
    List all subjects in a college [GET]
    """
    # return the list of subjects in a college
    serializer_class = SubjectSerializer
    pagination_class = ResultsSetPagination
    lookup_url_kwarg = 'college_code'

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['subject_code', 'year', 'branch__branch_code']
    search_fields = ['name', 'subject_code', 'branch__branch_code']
    # filter_class = SubjectFilter  # branch
    # filterset_fields = ['subject_code', 'branch__branch_code', 'course__course_code', 'year',]

    def get_queryset(self):
        college_code = self.kwargs.get(self.lookup_url_kwarg)
        subjects = Subject.objects.filter(college=college_code)
        return subjects


class SubjectDetail(RetrieveAPIView):
    """
    Retrieve a timetable of a branch in a college [GET]
    """
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    lookup_fields = ('college_code', 'branch_code', 'year',)

    def get_object(self):
        college_code = self.kwargs.get('college_code')
        year = self.kwargs.get('year')
        branch_code = self.kwargs.get('branch_code')
        college = College.objects.get(college_code=college_code)
        branch = Branch.objects.get(branch_code=branch_code)
        return Subject.objects.get(college=college.college_code, branch=branch.id, year=year)


""" Gtimetable """


class GtimetableDetail(RetrieveAPIView):
    """
    Retrieve a Gtimetable of a year of a branch in a college [GET]
    """
    queryset = Gtimetable.objects.all()
    serializer_class = GtimetableSerializer
    lookup_fields = ('college_code', 'branch_code', 'year',)

    def get_object(self):
        college_code = self.kwargs.get('college_code')
        year = self.kwargs.get('year')
        branch_code = self.kwargs.get('branch_code')
        college = College.objects.get(college_code=college_code)
        branch = Branch.objects.get(branch_code=branch_code)
        return Gtimetable.objects.get(college=college.college_code, branch=branch.id, year=year)


class ContributorList(ListAPIView):
    """
    List all contributor [GET]
    """
    # return the list of subjects in a college
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    pagination_class = ResultsSetPagination
    # lookup_url_kwarg = 'college_code'

    # filter_backends = [DjangoFilterBackend, filters.SearchFilter,]
    # filterset_fields = ['subject_code', 'year', 'branch__branch_code']
    # search_fields = ['name', 'subject_code', 'branch__branch_code']
    # filter_class = SubjectFilter  # branch
    # filterset_fields = ['subject_code', 'branch__branch_code', 'course__course_code', 'year',]

    # def get_queryset(self):
    #     college_code = self.kwargs.get(self.lookup_url_kwarg)
    #     subjects = Subject.objects.filter(college=college_code)
    #     return subjects


class ContributorDetail(RetrieveAPIView):
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    lookup_field = 'pk'


class MaterialList(ListAPIView):
    """
    List all contributor [GET]
    """
    # return the list of subjects in a college
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['year', 'college', 'branch__branch_code',
                        'subject__subject_code', 'course__course_code']
    search_fields = ['title', 'contributor_name',
                     'subject_name', 'subject__subject_code']


class FacultyList(ListAPIView):
    """
    List all faculty in a college [GET]
    """
    # return the list of faculty in a college
    serializer_class = FacultySerializer
    pagination_class = ResultsSetPagination
    lookup_url_kwarg = 'college_code'

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['branch__branch_code', 'is_teaching_staff']
    search_fields = ['name', 'branch__name',
                     'branch__branch_code', 'designation']
    # filter_class = SubjectFilter  # branch
    # filterset_fields = ['subject_code', 'branch__branch_code', 'course__course_code', 'year',]

    def get_queryset(self):
        college_code = self.kwargs.get(self.lookup_url_kwarg)
        faculty = Faculty.objects.filter(college=college_code)
        return faculty


class FacultyDetail(RetrieveAPIView):
    """
    Retrieve a Faculty of a year of a branch in a college [GET]
    """
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    lookup_field = 'pk'


class RecommendationList(ListAPIView):
    """
    List all faculty in a college [GET]
    """
    # return the list of faculty in a college
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    pagination_class = ResultsSetPagination
    # lookup_url_kwarg = 'college_code'

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['recommended_by_faculty__name',
                        'recommended_by_contributor__name']
    search_fields = ['title', ]


# # function based views

# @api_view(['GET'])
# def UserList(request):
# 	users = User.objects.all()
# 	serializer = UserSerializer(users, many=True)
# 	return Response(serializer.data)


# @api_view(['GET'])
# def userDetail(request, username):
# 	user = User.objects.get(username=username)
# 	serializer = UserSerializer(user, many=False)
# 	return Response(serializer.data)

# # end function based views


# """ Subject """
# class SubjectList(ListAPIView):
# 	"""
# 	List all Subjects [GET] or create a new Subject [POST]
# 	"""

# 	# return the list of subjects
# 	queryset = Subject.objects.all()
# 	serializer_class = SubjectSerializer
# 	pagination_class = ResultsSetPagination

# 	filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
# 	filterset_fields = ['year',]
# 	search_fields = ['name', 'subject_code']


# 	def post(self, request, format=None):
# 		serializer = SubjectSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)

# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class SubjectDetail(APIView):
# 	"""
# 	Retrieve [GET], update [PUT] or delete [DELETE] a Subject instance.
# 	"""
# 	def get_object(self, pk):
# 		try:
# 			return Subject.objects.get(pk=pk)
# 		except Subject.DoesNotExist:
# 			raise Http404

# 	def get(self, request, pk, format=None):
# 		subject = self.get_object(pk)
# 		serializer = SubjectSerializer(subject)
# 		return Response(serializer.data)

# 	def put(self, request, pk, format=None):
# 		subject = self.get_object(pk)
# 		serializer = SubjectSerializer(subject, data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 	def delete(self, request, pk, format=None):
# 		subject = self.get_object(pk)
# 		subject.delete()
# 		return Response(status=status.HTTP_204_NO_CONTENT)


#

# """ Course """
# class CourseList(ListAPIView):
# 	"""
# 	List all Subjects [GET] or create a new Course
# 	"""

# 	# return the list of subjects
# 	queryset = Course.objects.all()
# 	serializer_class = CourseSerializer
# 	pagination_class = ResultsSetPagination


# 	def post(self, request, format=None):
# 		serializer = CourseSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)

# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class CourseDetail(APIView):
# 	"""
# 	Retrieve, update or delete a Course instance.
# 	"""
# 	def get_object(self, pk):
# 		try:
# 			return Course.objects.get(pk=pk)
# 		except Course.DoesNotExist:
# 			raise Http404

# 	def get(self, request, pk, format=None):
# 		course = self.get_object(pk)
# 		serializer = CourseSerializer(course)
# 		return Response(serializer.data)

# 	def put(self, request, pk, format=None):
# 		course = self.get_object(pk)
# 		serializer = CourseSerializer(course, data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 	def delete(self, request, pk, format=None):
# 		course = self.get_object(pk)
# 		course.delete()
# 		return Response(status=status.HTTP_204_NO_CONTENT)


# """  Textbook  """

# class TextbookList(ListAPIView):
# 	"""
# 	List all Textbooks [GET] or create a new Textbook.
# 	"""
# 	queryset = Textbook.objects.all()
# 	serializer_class = TextbookSerializer
# 	pagination_class = ResultsSetPagination

# 	filter_backends = [DjangoFilterBackend]
# 	filterset_fields = ['subject', 'branch', 'course', 'year',]

# 	def post(self, request, format=None):
# 		serializer = TextbookSerializer(data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)

# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class TextbookDetail(APIView):
# 	"""
# 	Retrieve, update or delete a snippet instance.
# 	"""
# 	def get_object(self, pk):
# 		try:
# 			return Textbook.objects.get(pk=pk)
# 		except Textbook.DoesNotExist:
# 			raise Http404

# 	def get(self, request, pk, format=None):
# 		textbook = self.get_object(pk)
# 		serializer = TextbookSerializer(textbook)
# 		return Response(serializer.data)

# 	def put(self, request, pk, format=None):
# 		textbook = self.get_object(pk)
# 		serializer = TextbookSerializer(textbook, data=request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 	def delete(self, request, pk, format=None):
# 		textbook = self.get_object(pk)
# 		textbook.delete()
# 		return Response(status=status.HTTP_204_NO_CONTENT)


# # """Lectures"""
# class LectureList(ListCreateAPIView):
# 	queryset = Lecture.objects.all()
# 	serializer_class = LectureSerializer
# 	pagination_class = ResultsSetPagination


# class DayList(ListCreateAPIView):
# 	queryset = Day.objects.all()
# 	serializer_class = DaySerializer
# 	pagination_class = ResultsSetPagination


# class TimetableList(ListCreateAPIView):
# 	queryset = Timetable.objects.all()
# 	serializer_class = TimetableSerializer
# 	pagination_class = ResultsSetPagination


# class PortionList(ListCreateAPIView):
# 	queryset = Portion.objects.all()
# 	serializer_class = PortionSerializer
# 	pagination_class = ResultsSetPagination

# 	filter_backends = [DjangoFilterBackend]
# 	filterset_fields = ['subject', 'college',]


# class PortionDetail(RetrieveUpdateDestroyAPIView):
# 	queryset = Portion.objects.all()
# 	serializer_class = PortionSerializer


# class MaterialList(ListCreateAPIView):
# 	"""
# 	List all Materials [GET]
# 	"""
# 	queryset = Material.objects.all()
# 	serializer_class = MaterialSerializer
# 	pagination_class = ResultsSetPagination

# 	filter_backends = [DjangoFilterBackend]
# 	filterset_fields = ['subject', 'branch', 'course', 'year',]


# class GsheettableList(ListCreateAPIView):
# 	"""
# 	List all Materials [GET]
# 	"""
# 	queryset = Gsheettable.objects.all()
# 	serializer_class = GsheettableSerializer
# 	pagination_class = ResultsSetPagination

# 	filter_backends = [DjangoFilterBackend]
# 	filterset_fields = ['college', 'branch', 'year',]


# class CollegeList(ListCreateAPIView):
# 	"""
# 	List all Materials [GET]
# 	"""
# 	queryset = College.objects.all()
# 	serializer_class = CollegeSerializer
# 	pagination_class = ResultsSetPagination

# 	filter_backends = [DjangoFilterBackend,  filters.SearchFilter, ]
# 	filterset_fields = ['college_code',]
# 	search_fields = ['name', 'college_code', 'location', 'description',]


# class FacultyList(ListCreateAPIView):
# 	"""
# 	List all Materials [GET]
# 	"""
# 	queryset = Faculty.objects.all()
# 	serializer_class = FacultySerializer
# 	pagination_class = ResultsSetPagination

# 	filter_backends = [DjangoFilterBackend, filters.SearchFilter,]
# 	filterset_fields = ['branch', 'is_teaching_staff', 'college',]
# 	search_fields = ['name', 'designation',]
