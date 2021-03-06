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
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 1000

# end utility classes


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "College List": {
            "url": reverse('college-list', request=request),
            "path": "/api/college/",
            "name": "college-list",
            "fields": "college_code, url, branches, name, established, location, full_address, link_image, website_link, static_map_src, email, linkedin, instagram, facebook, twitter, youtube",
            "filter_fields": "college_code",
            "search_fields": "college_code, name, location",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "College Detail": {
            "url": reverse('college-detail', request=request, args=["NITG"]),
            "path": "/api/college/NITG/",
            "users_college": "/api/college/me/",
            "users_college_url": reverse('users-college', request=request),
            "name": "college-detail",
            "fields": "college_code, branches, name, established, location, full_address, link_image, website_link, static_map_src, email, linkedin, instagram, facebook, twitter, youtube",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Subject List": {
            "url": reverse('subject-list', request=request),
            "path": "/api/subject/",
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
            "path": "/api/subject/450/",
            "name": "subject-detail",
            "fields": "id, url, portions, subject_code, name, colleges, branches, years",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Faculty List": {
            "url": reverse('faculty-list', request=request),
            "path": "/api/faculty/",
            "name": "faculty-list",
            "fields": "id, url, name, branch_name, designation, email, phone_number, is_teaching_staff, branch, college",
            "filter_fields": "branch__branch_code, college__college_code, is_teaching_staff",
            "search_fields": "name, branch__name, branch__branch_code, designation",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Faculty Detail": {
            "url": reverse('faculty-detail', request=request, args=[80]),
            "path": "/api/faculty/450/",
            "name": "faculty-detail",
            "fields": "id, url, name, branch_name, designation, email, phone_number, is_teaching_staff, branch, college",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Portion List": {
            "url": reverse('portion-list', request=request),
            "path": "/api/portion/",
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
            "path": "/api/portion/450/",
            "name": "portion-detail",
            "fields": "id, url, link, subjects, colleges, branches, years",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        # "Gtimetable List": {
        #     "url": reverse('gtimetable-list', request=request),
        #     "path": "/api/gtimetable/",
        #     "name": "gtimetable-list",
        #     "fields": "id, url, link, subjects, colleges, branches, years",
        #     "filter_fields": "branches__branch_code, colleges__college_code, subjects_subject_code, years__year",
        #     "search_fields": "subjects__name, branches__branch_code, subjects_subject_code",
        #     "method_allowed": "GET, POST",
        #     "permissions": "AllowAny"
        # },
        # "Gtimetable Detail": {
        #     "url": reverse('gtimetable-detail', request=request, args=[10]),
        #     "path": "/api/gtimetable/10/",
        #     "name": "gtimetable-detail",
        #     "fields": "id, url, link, subjects, colleges, branches, years",
        #     "method_allowed": "GET, PUT, DELETE",
        #     "permissions": "AllowAny"
        # },
        "Contributor List": {
            "url": reverse('contributor-list', request=request),
            "path": "/api/contributor/",
            "name": "contributor-list",
            "fields": "url, name, slug, instagram, twitter, linkedin",
            "search_fields": "name",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Contributor Detail": {
            "url": reverse('contributor-detail', request=request, args=['raj-dhulapkar']),
            "path": "/api/contributor/raj-dhulapkar/",
            "name": "contributor-detail",
            "fields": "url, name, slug, instagram, twitter, linkedin",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },
        "Textbook List": {
            "url": reverse('textbook-list', request=request),
            "path": "/api/textbook/",
            "name": "textbook-list",
            "fields": "id, url, link, subjects, colleges, branches, years, title, author, link, is_affiliate_link, cover_image",
            "filter_fields": "branches__branch_code, colleges__college_code, subjects_subject_code, years__year, is_affiliate_link",
            "search_fields": "name, author, subjects__name, branches__branch_code, subjects_subject_code",
            "other_params": "fields",
            "method_allowed": "GET, POST",
            "permissions": "AllowAny"
        },
        "Textbook Detail": {
            "url": reverse('textbook-detail', request=request, args=[10]),
            "path": "/api/textbook/450/",
            "name": "textbook-detail",
            "fields": "id, url, link, subjects, colleges, branches, years, title, author, link, is_affiliate_link, cover_image",
            "method_allowed": "GET, PUT, DELETE",
            "permissions": "AllowAny"
        },

    }

    return Response(api_urls)


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
