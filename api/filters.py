import django_filters

from api.models import *


class SubjectFilter(django_filters.FilterSet):
    branch = django_filters.ModelChoiceFilter(field_name="branch__branch_code",
                                            queryset=Branch.objects.all())

    class Meta:
        model = Subject
        fields = ('branch',)