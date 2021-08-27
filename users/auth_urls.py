from django.urls import re_path

from users.views import ProviderAuthView

urlpatterns = [
    re_path(
        r"^o/(?P<provider>\S+)/$",
        ProviderAuthView.as_view(),
        name="provider-auth",
    )
]
