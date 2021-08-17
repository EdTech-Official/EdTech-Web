from django.db.models.query import QuerySet
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

from college.models import *

from rest_framework.reverse import reverse

from content.models import *


# utility classes
class ResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000

# end utility classes


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "College List": {
            "url": reverse('college-list', request=request),
            "path": "/api/college-list/",
            "name": "college-list",
            "fields": "college_code, url, branches, name, established, location, full_address, link_image, website_link, static_map_src, email, linkedin, instagram, facebook, twitter, youtube",
            "filter_fields": "college_code",
            "search_fields": "college_code, name, location",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "College Detail": {
            "url": reverse('college-detail', request=request, args=["NITG"]),
            "path": "/api/college-detail/NITG/",
            "name": "college-detail",
            "fields": "college_code, branches, name, established, location, full_address, link_image, website_link, static_map_src, email, linkedin, instagram, facebook, twitter, youtube",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Subject List": {
            "url": reverse('subject-list', request=request),
            "path": "/api/subject-list/",
            "name": "subject-list",
            "fields": "id, url, portions, subject_code, name, colleges, branches, years",
            "filter_fields": "subject_code, colleges__college_code, branches__branch_code, years__year",
            "search_fields": "subject_code, name, branches__branch_code",
            "other_params": "fields",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Subject Detail": {
            "url": reverse('subject-detail', request=request, args=[450]),
            "path": "/api/subject-detail/450/",
            "name": "subject-detail",
            "fields": "id, url, portions, subject_code, name, colleges, branches, years",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Faculty List": {
            "url": reverse('faculty-list', request=request),
            "path": "/api/faculty-list/",
            "name": "faculty-list",
            "fields": "id, url, name, branch_name, designation, email, phone_number, is_teaching_staff, branch, college",
            "filter_fields": "branch__branch_code, college__college_code, is_teaching_staff",
            "search_fields": "name, branch__name, branch__branch_code, designation",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Faculty Detail": {
            "url": reverse('faculty-detail', request=request, args=[80]),
            "path": "/api/faculty-detail/450/",
            "name": "faculty-detail",
            "fields": "id, url, name, branch_name, designation, email, phone_number, is_teaching_staff, branch, college",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Portion List": {
            "url": reverse('portion-list', request=request),
            "path": "/api/portion-list/",
            "name": "portion-list",
            "fields": "id, url, link, subjects, colleges, branches, years",
            "filter_fields": "branches__branch_code, colleges__college_code, subjects_subject_code, years__year",
            "search_fields": "subjects__name, branches__branch_code, subjects_subject_code",
            "other_params": "fields",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Portion Detail": {
            "url": reverse('portion-detail', request=request, args=[200]),
            "path": "/api/portion-detail/450/",
            "name": "portion-detail",
            "fields": "id, url, link, subjects, colleges, branches, years",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Gtimetable List": {
            "url": reverse('gtimetable-list', request=request),
            "path": "/api/gtimetable-list/",
            "name": "gtimetable-list",
            "fields": "id, url, link, subjects, colleges, branches, years",
            "filter_fields": "branches__branch_code, colleges__college_code, subjects_subject_code, years__year",
            "search_fields": "subjects__name, branches__branch_code, subjects_subject_code",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Gtimetable Detail": {
            "url": reverse('gtimetable-detail', request=request, args=[10]),
            "path": "/api/gtimetable-detail/10/",
            "name": "gtimetable-detail",
            "fields": "id, url, link, subjects, colleges, branches, years",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Contributor List": {
            "url": reverse('contributor-list', request=request),
            "path": "/api/contributor-list/",
            "name": "contributor-list",
            "fields": "url, name, slug, instagram, twitter, linkedin",
            "search_fields": "name",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Contributor Detail": {
            "url": reverse('contributor-detail', request=request, args=['raj-dhulapkar']),
            "path": "/api/contributor-detail/raj-dhulapkar/",
            "name": "contributor-detail",
            "fields": "url, name, slug, instagram, twitter, linkedin",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },

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


""" Branch """


class BranchList(ListAPIView):
    """
    List all Branches in a branches [GET]
    """
    # return the list of subjects in a college
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    pagination_class = ResultsSetPagination


class BranchDetail(RetrieveAPIView):
    """
    Retrieve a course in a branch [GET]
    """
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    lookup_field = 'pk'


""" Subject """


class SubjectList(ListAPIView):
    """
    List all subjects in a college [GET]
    """
    # return the list of subjects in a college
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['years__year', 'subject_code',
                        'branches__branch_code', 'colleges__college_code']
    search_fields = ['name', 'subject_code', 'branches__branch_code']


class SubjectDetail(RetrieveAPIView):
    """
    Retrieve a subject [GET]
    """
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    lookup_field = 'pk'


class PortionList(ListAPIView):
    queryset = Portion.objects.all()
    serializer_class = PortionSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['years__year',
                        'subjects__subject_code',
                        'branches__branch_code', 'colleges__college_code']
    search_fields = ['subjects__subject_code',
                     'subjects__name', 'branches__branch_code']


class PortionDetail(RetrieveAPIView):
    queryset = Portion.objects.all()
    serializer_class = PortionSerializer
    lookup_field = 'pk'


class FacultyList(ListAPIView):
    """
    List all faculty in a college [GET]
    """
    # return the list of faculty in a college
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['branch__branch_code',
                        'is_teaching_staff', 'college__college_code']
    search_fields = ['name', 'branch__name',
                     'branch__branch_code', 'designation']


class FacultyDetail(RetrieveAPIView):
    """
    Retrieve a Faculty of a year of a branch in a college [GET]
    """
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    lookup_field = 'pk'


""" Gtimetable """


class GtimetableList(ListAPIView):
    """
    List all Gtimetables [GET]
    """
    # return the list of faculty in a college
    queryset = Gtimetable.objects.all()
    serializer_class = GtimetableSerializer
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['college__college_code',
                        'branch__branch_code', 'year__year']


class GtimetableDetail(RetrieveAPIView):
    """
    Retrieve a Gtimetable of a year of a branch in a college [GET]
    """
    queryset = Gtimetable.objects.all()
    serializer_class = GtimetableSerializer
    lookup_fields = 'pk'


class ContributorList(ListAPIView):
    """
    List all contributor [GET]
    """
    # return the list of subjects in a college
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    pagination_class = ResultsSetPagination
    filter_backends = [filters.SearchFilter, ]
    search_fields = ['name', ]


class ContributorDetail(RetrieveAPIView):
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    lookup_field = 'slug'


# class MaterialList(ListAPIView):
#     """
#     List all contributor [GET]
#     """
#     # return the list of subjects in a college
#     queryset = Material.objects.all()
#     serializer_class = MaterialSerializer
#     pagination_class = ResultsSetPagination

#     filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
#     filterset_fields = ['year', 'college', 'branch__branch_code',
#                         'subject__subject_code', 'course__course_code']
#     search_fields = ['title', 'contributor_name',
#                      'subject_name', 'subject__subject_code']


# class RecommendationList(ListAPIView):
#     """
#     List all faculty in a college [GET]
#     """
#     # return the list of faculty in a college
#     queryset = Recommendation.objects.all()
#     serializer_class = RecommendationSerializer
#     pagination_class = ResultsSetPagination

#     filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
#     filterset_fields = ['recommended_by_faculty__name',
#                         'recommended_by_contributor__name']
#     search_fields = ['title', ]


# class TextbookList(ListAPIView, MultipleFieldLookupMixin):
#     """
#     List all textbooks [GET]
#     """
#     # return the list of subjects in a college
#     queryset = Textbook.objects.all()
#     serializer_class = TextbookSerializer
#     pagination_class = ResultsSetPagination

#     filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
#     filterset_fields = ['colleges__college_code', 'branches__branch_code',
#                         'subjects__subject_code', 'years__year']
#     search_fields = ['title', 'author',
#                      'subjects__name', 'subjects__subject_code',
#                      'branches__name', 'branches__branch_code']


# class TextbookDetail(RetrieveAPIView):
#     queryset = Textbook.objects.all()
#     serializer_class = TextbookSerializer
#     lookup_field = 'pk'


# class MaterialList(ListAPIView, MultipleFieldLookupMixin):
#     """
#     List all Materials [GET]
#     """
#     # return the list of subjects in a college
#     queryset = Material.objects.all()
#     serializer_class = MaterialSerializer
#     pagination_class = ResultsSetPagination

#     filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
#     filterset_fields = ['colleges__college_code', 'branches__branch_code',
#                         'subjects__subject_code', 'years__year']
#     search_fields = ['title', 'author',
#                      'subjects__name', 'subjects__subject_code',
#                      'branches__name', 'branches__branch_code']


# class MaterialDetail(RetrieveAPIView):
#     queryset = Material.objects.all()
#     serializer_class = MaterialSerializer
#     lookup_field = 'pk'

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
