from django.contrib import admin
from users.models import Profile, User

from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken


class ProfileInline(admin.TabularInline):
    model = Profile
    fields = ['college', 'branch', 'year']


class UserAdmin(admin.ModelAdmin):
    inlines = [
        ProfileInline,
    ]


class OutstandingTokenAdmin(OutstandingTokenAdmin):

    def has_delete_permission(self, *args, **kwargs):
        return True  # or whatever logic you want


admin.site.unregister(OutstandingToken)
admin.site.register(OutstandingToken,
                    OutstandingTokenAdmin)


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Profile)
