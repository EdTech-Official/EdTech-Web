from django.urls import re_path, path
# from rest_framework_simplejwt import views
from users.views import BlacklistTokenUpdateView, UserProfileView

urlpatterns = [
    re_path(r"^jwt/blacklist/?", BlacklistTokenUpdateView.as_view(),
            name="jwt-blacklist"),
    path("profile/me/", UserProfileView.as_view(), name="profile-me")
]
