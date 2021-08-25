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
    """
    List all subjects in a college [GET]
    """
    # return the list of subjects in a college
    # queryset = Subject.objects.all()
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
    """
    Retrieve a subject [GET]
    """
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    lookup_field = 'pk'
