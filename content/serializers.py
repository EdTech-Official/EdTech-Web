from rest_framework import serializers
from drf_queryfields import QueryFieldsMixin

from content.models import *
from college.models import *

from college.serializers import (SubjectListingField,
                                 BranchesListingField,
                                 YearsListingField)


# contributor serializer
class ContributorSerializer(serializers.HyperlinkedModelSerializer):
    # materials = MaterialSerializer(Material, many=True, read_only=True)
    url = serializers.HyperlinkedIdentityField(
        view_name='contributor-detail',
        lookup_field='slug'
    )

    class Meta:
        model = Contributor
        fields = '__all__'


# serializer for textbook

class TextbookSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='textbook-detail',
        lookup_field='pk'
    )
    subjects = SubjectListingField(many=True, read_only=True)
    branches = BranchesListingField(many=True, read_only=True)
    years = YearsListingField(many=True, read_only=True)

    class Meta:
        model = Textbook
        fields = '__all__'
