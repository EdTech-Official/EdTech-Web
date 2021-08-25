from django.urls import re_path
# from rest_framework_simplejwt import views
from users.views import BlacklistTokenUpdateView

urlpatterns = [
    re_path(r"^jwt/blacklist/?", BlacklistTokenUpdateView.as_view(),
            name="jwt-blacklist"),
]
