from django.contrib import admin
from .models import *
from nested_admin import NestedModelAdmin, NestedStackedInline, NestedTabularInline


# class LectureTabularInline(NestedTabularInline):
#     model = Day.lectures.through
#     extra = 1

# class DayTabularInline(NestedTabularInline):
#     model = Day
#     extra = 1
#     inlines = [LectureTabularInline,]


# class TimetabelAdmin(NestedModelAdmin):
#     inlines = [DayTabularInline,]


# class DayAdmin(admin.ModelAdmin):
#     inlines = [
#         LectureTabularInline
#     ]

# # class DayInline(admin.TabularInline):
# #     model = Day

# # class TimetableAdmin(admin.ModelAdmin):
# #     inlines = [
# #         DayInline,
# #     ]


class TextbookInline(admin.StackedInline):
    model = Textbook
    fields = ['title']


class MaterialInline(admin.StackedInline):
    model = Material


class BranchInline(admin.StackedInline):
    model = Branch
    fields = ['branch_code', 'name']


class CourseInline(admin.StackedInline):
    model = Course
    fields = ['course_code', 'name']


class SubjectAdmin(admin.ModelAdmin):
    inlines = [
        TextbookInline
    ]


class CourseAdmin(admin.ModelAdmin):
    inlines = [
        TextbookInline
    ]


class BranchAdmin(admin.ModelAdmin):
    inlines = [
        TextbookInline
    ]


class CollegeAdmin(admin.ModelAdmin):
    inlines = [
        BranchInline,
        CourseInline
    ]


class ContributorAdmin(admin.ModelAdmin):
    inlines = [
        MaterialInline,
    ]


admin.site.register(College, CollegeAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Branch, BranchAdmin)
admin.site.register(Subject, SubjectAdmin)
admin.site.register(Textbook)
admin.site.register(Faculty)
admin.site.register(Material)
admin.site.register(Recommendation)
# admin.site.register(Portion)
admin.site.register(Gtimetable)
admin.site.register(Contributor, ContributorAdmin)


# admin.site.register(Lecture)
# admin.site.register(Day, DayAdmin)
# admin.site.register(Timetable, TimetabelAdmin)


# admin.site.register(Timetable, TimetableAdmin)
# Register your models here.
