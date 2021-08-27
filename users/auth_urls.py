from django.urls import re_path

from users.views import CustomProviderAuthView

urlpatterns = [
    re_path(
        r"^o/(?P<provider>\S+)/$",
        CustomProviderAuthView.as_view(),
        name="provider-auth",
    )
]
