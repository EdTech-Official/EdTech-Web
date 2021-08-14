import datetime
from django.db import models
from django.db.models import base
from django.db.models.aggregates import Max
from django.db.models.base import Model
from django.utils import timezone
from django.contrib.auth.models import User
from django.core.validators import BaseValidator, RegexValidator, MaxValueValidator, MinValueValidator

from college.models import *


"""
MODELS:
    - COLLEGE:
        fields : college_code(PK), name, established, location, full_address, link_image, website_link, static_map_src, email, linkedin, instagram, facebook, twitter, youtube

    - COURSE:
        fields : id, course_code, college, name, description

    - BRANCH: 
        fields : id, branch_code, college, name, description

    - SUBJECT:
        fields : id, subject_code, college, branch, name, year, description

    - Gsheettable:
        fields : id, title, gsheet_src, college, branch, year

    - TEXTBOOK:
        fields : id, title, author, link, cover_image, college, subject, branch, course, year.

    - MATERIAL:
        fields : id, title, link, author, subject, branch, course, year, posted_by, date_posted, description

    - FACULTY:
        fields : id, name, designation, email, phone_number, description, branch, college, is_teaching_staff

    - PORTION:
        fields : id, subject, college, branch, link

    - TIMETABLE: X
        fields : title, branch, course, year, semester

    - DAY: X
        fields : day, timetable(FK)

    - LECTURE: X
        fields : subject(FK), start_time, end_time, teacher, days(MTMF)

"""


# class Portion(models.Model):
#     subject = models.ForeignKey(Subject, on_delete=models.DO_NOTHING, related_name="portions")
#     college = models.ForeignKey(College, on_delete=models.DO_NOTHING, related_name="portions")
#     branch = models.ForeignKey(Branch, on_delete=models.DO_NOTHING, related_name="portions", blank=True, null=True)
#     link = models.URLField(max_length=200)

#     def __str__(self):
#         return f"Syllabus for {self.subject.subject_code}, {self.branch.branch_code} of {self.college}"


# class Timetable(models.Model):
#     YEARS = [
#         ('FIRST', 'FIRST'),
#         ('SECOND', 'SECOND'),
#         ('THIRD', 'THIRD'),
#         ('FOURTH', 'FOURTH'),
#     ]

#     SEMESTERS = [
#         ('SEM_1', "I Semester"),
#         ('SEM_2', "II Semester"),
#         ('SEM_3', "III Semester"),
#         ('SEM_4', "IV Semester"),
#         ('SEM_5', "V Semester"),
#         ('SEM_6', "VI Semester"),
#         ('SEM_7', "VII Semester"),
#         ('SEM_8', "VIII Semester"),
#     ]

#     title = models.CharField(max_length=150)
#     branch = models.ForeignKey(Branch, on_delete=models.DO_NOTHING, related_name="timetables")
#     course = models.ForeignKey(Course, on_delete=models.DO_NOTHING, related_name="timetables")
#     year = models.CharField(max_length=8,choices=YEARS, default='FIRST')
#     semester = models.CharField(max_length=5,choices=SEMESTERS, default='FIRST')

#     def __str__(self):
#         return self.title


# class Day(models.Model):
#     DAYS = [
#         ('MON', 'Monday'),
#         ('TUE', 'Tuesday'),
#         ('WED', 'Wednesday'),
#         ('THU', 'Thursday'),
#         ('FRI', 'Friday'),
#         ('SAT', 'Saturday'),
#         ('SUN', 'Sunday'),
#     ]
#     day = models.CharField(max_length=3, choices=DAYS, default='MON')
#     timetable = models.ForeignKey(Timetable, on_delete=CASCADE, related_name='days', blank=False)

#     def __str__(self):
#         return f"{self.day} in {self.timetable.title}."


# class Lecture(models.Model):
#     subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
#     start_time = models.TimeField()
#     end_time = models.TimeField()
#     teacher = models.CharField(max_length=60)
#     days = models.ManyToManyField(Day, related_name='lectures', blank=True)


#     def __str__(self):
#         return f"Lecture on {self.subject.subject_code} by {self.teacher} ( {self.start_time} - {self.end_time} )"
