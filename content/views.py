from django.http.response import Http404
from rest_framework.generics import (ListAPIView,
                                     RetrieveAPIView)
from rest_framework.response import Response

# import models
from college.models import *
from content.models import *

# import serializers
from content.serializers import *

# import pagination classes
from api.views import ResultsSetPagination


# import filtration and search backends
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


# views for contributors
class ContributorList(ListAPIView):
    """
    List all contributor [GET]
    """
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    pagination_class = ResultsSetPagination
    filter_backends = [filters.SearchFilter, ]
    search_fields = ['name', ]


class ContributorDetail(RetrieveAPIView):
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    lookup_field = 'slug'


# views for textbooks
class TextbookList(ListAPIView):
    pagination_class = ResultsSetPagination

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, ]
    filterset_fields = ['colleges__college_code', 'branches__branch_code',
                        'subjects__subject_code', 'years__year', 'is_affiliate_link']
    search_fields = ['title', 'author',
                     'subjects__name', 'subjects__subject_code',
                     'branches__name', 'branches__branch_code']

    def get_queryset(self, request):
        textbooks = Textbook.objects.filter(
            colleges=request.user.profile.college, branches=request.user.profile.branch, years=request.user.profile.year)
        return textbooks

    def get(self, request, format=None):
        textbooks = self.get_queryset(request)
        serializer = TextbookSerializer(
            textbooks, many=True, context={'request': request})
        return Response(serializer.data)


class TextbookDetail(RetrieveAPIView):
    queryset = Textbook.objects.all()
    serializer_class = TextbookSerializer
    lookup_field = 'pk'
