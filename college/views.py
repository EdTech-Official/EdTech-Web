from django.http.response import Http404
from rest_framework.generics import (ListAPIView,
                                     RetrieveAPIView)
from rest_framework.response import Response

# import models
from college.models import *

# import serializers
from college.serializers import *

# import pagination classes
from api.views import ResultsSetPagination


# import filtration and search backends
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


# college views
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
    serializer_class = SubjectSerializer
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['years__year', 'subject_code',
                        'branches__branch_code', 'colleges__college_code']
    search_fields = ['name', 'subject_code', 'branches__branch_code']

    def get_queryset(self, request):
        subjects = Subject.objects.filter(
            colleges=request.user.profile.college, branches=request.user.profile.branch, years=request.user.profile.year)
        return subjects

    def get(self, request, format=None):
        subjects = self.get_queryset(request)
        serializer = SubjectSerializer(
            subjects, many=True, context={'request': request})
        return Response(serializer.data)


class SubjectDetail(RetrieveAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    lookup_field = 'pk'


""" Portins views"""


class PortionList(ListAPIView):
    serializer_class = PortionSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['years__year',
                        'subjects__subject_code',
                        'branches__branch_code', 'colleges__college_code']
    search_fields = ['subjects__subject_code',
                     'subjects__name', 'branches__branch_code']

    def get_queryset(self, request):
        portions = Portion.objects.filter(
            colleges=request.user.profile.college, branches=request.user.profile.branch, years=request.user.profile.year)
        return portions

    def get(self, request, format=None):
        portions = self.get_queryset(request)
        serializer = PortionSerializer(
            portions, many=True, context={'request': request})
        return Response(serializer.data)


class PortionDetail(RetrieveAPIView):
    queryset = Portion.objects.all()
    serializer_class = PortionSerializer
    lookup_field = 'pk'


""" Year List View """


class YearList(ListAPIView):
    queryset = Year.objects.all()
    serializer_class = YearSerializer
    pagination_class = ResultsSetPagination


""" Faculty views """


class FacultyList(ListAPIView):
    serializer_class = FacultySerializer
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['branch__branch_code',
                        'is_teaching_staff', 'college__college_code']
    search_fields = ['name', 'branch__name',
                     'branch__branch_code', 'designation']

    def get_queryset(self, request):
        faculty = Faculty.objects.filter(
            college=request.user.profile.college, branch=request.user.profile.branch)
        return faculty

    def get(self, request, format=None):
        faculty = self.get_queryset(request)
        serializer = FacultySerializer(
            faculty, many=True, context={'request': request})
        return Response(serializer.data)


class FacultyDetail(RetrieveAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    lookup_field = 'pk'


# Gtimetable veiw
class GtimetableDetail(RetrieveAPIView):

    def get_object(self, request):
        gtimetable = Gtimetable.objects.filter(
            college=request.user.profile.college, branch=request.user.profile.branch, year=request.user.profile.year)

        if len(gtimetable) == 0:
            raise Http404
        else:
            return gtimetable.first()

    def get(self, request, format=None):
        profile = self.get_object(request)
        serializer = GtimetableSerializer(
            profile, many=False, context={'request': request})
        return Response(serializer.data)
