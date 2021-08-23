from django.contrib import admin
from users.models import Profile, User


class ProfileInline(admin.TabularInline):
    model = Profile
    fields = ['college', 'branch', 'year']


class UserAdmin(admin.ModelAdmin):
    inlines = [
        ProfileInline,
    ]


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Profile)
