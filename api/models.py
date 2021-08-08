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


# class College(models.Model):
#     """ Model for all the Colleges """

#     college_code = models.CharField(
#         max_length=12, unique=True, primary_key=True)
#     name = models.CharField(max_length=180)
#     established = models.PositiveIntegerField(default=datetime.date.today(
#     ).year, validators=[MinValueValidator(1900), MaxValueValidator(2050)])
#     location = models.CharField(max_length=30)
#     full_address = models.CharField(max_length=200, default="", blank=True)
#     link_image = models.URLField(max_length=200, blank=True)
#     website_link = models.URLField(max_length=200, blank=True)
#     static_map_src = models.URLField(max_length=330, blank=True)
#     email = models.EmailField(max_length=100, blank=True)
#     linkedin = models.URLField(max_length=60, blank=True)
#     instagram = models.URLField(max_length=60, blank=True)
#     facebook = models.URLField(max_length=60, blank=True)
#     twitter = models.URLField(max_length=60, blank=True)
#     youtube = models.URLField(max_length=60, blank=True)
#     description = models.TextField(default="")

#     def __str__(self):
#         return self.name


# class Course(models.Model):
#     """Model for all the Colleges """

#     course_code = models.CharField(max_length=10)
#     college = models.ForeignKey(
#         College, on_delete=models.DO_NOTHING, related_name='courses')
#     name = models.CharField(max_length=150)
#     description = models.TextField()

#     class Meta:
#         unique_together = ('course_code', 'college',)

#     def __str__(self):
#         return f"{self.course_code}: {self.name}"


# class Branch(models.Model):
#     """ Model for all the Branches """
#     branch_code = models.CharField(max_length=8)
#     college = models.ForeignKey(
#         College, on_delete=models.DO_NOTHING, related_name='branches')
#     name = models.CharField(max_length=150)
#     description = models.TextField()

#     class Meta:
#         unique_together = ('branch_code', 'college',)

#     def __str__(self):
#         return f"{self.branch_code}: {self.name}"


# class Subject(models.Model):

#     """Model for all the Subjects"""

#     YEARS = [
#         ('FIRST', 'FIRST'),
#         ('SECOND', 'SECOND'),
#         ('THIRD', 'THIRD'),
#         ('FOURTH', 'FOURTH'),
#     ]

#     subject_code = models.CharField(max_length=8)
#     college = models.ForeignKey(
#         College, on_delete=models.DO_NOTHING, related_name='subjects')
#     branch = models.ForeignKey(
#         Branch, on_delete=models.DO_NOTHING, related_name='subjects')
#     name = models.CharField(max_length=150)
#     year = models.CharField(max_length=8, choices=YEARS, default='FIRST')
#     description = models.TextField(default="")
#     portion_link = models.CharField(max_length=35, default="")

#     class Meta:
#         # unique_together = ('subject_code', 'college',)
#         unique_together = ('subject_code', 'college', 'branch',)

#     def __str__(self):
#         return f"({self.college.college_code}, {self.branch.branch_code}): {self.subject_code}: {self.name}"


class Contributor(models.Model):
    name = models.CharField(max_length=100)
    social_link = models.URLField(max_length=100)

    def __str__(self):
        return self.name


class Textbook(models.Model):
    YEARS = [
        ('FIRST', 'FIRST'),
        ('SECOND', 'SECOND'),
        ('THIRD', 'THIRD'),
        ('FOURTH', 'FOURTH'),
    ]

    title = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    link = models.URLField(max_length=250)
    is_affiliate = models.BooleanField(default=False)
    cover_image = models.URLField(max_length=200)
    college = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, related_name="textbooks", blank=True, null=True)
    subject = models.ForeignKey(
        Subject, on_delete=models.DO_NOTHING, related_name="textbooks")
    branch = models.ForeignKey(
        Branch, on_delete=models.DO_NOTHING, related_name="textbooks", blank=True, null=True)
    # course = models.ForeignKey(
    #     Course, on_delete=models.DO_NOTHING, related_name="textbooks", blank=True, null=True)
    year = models.CharField(max_length=8, choices=YEARS, default='FIRST')

    def __str__(self):
        return self.title


class Faculty(models.Model):
    """Model for all Faculty"""

    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=80)
    email = models.EmailField(max_length=254)
    # phone_regex = RegexValidator(
    #     regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    # validators should be a list
    phone_number = models.CharField(max_length=17, blank=True)
    # description = models.TextField()
    branch = models.ForeignKey(
        Branch, on_delete=models.DO_NOTHING, blank=False, related_name='faculty')
    college = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, blank=False, related_name='faculty')
    is_teaching_staff = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Material(models.Model):
    YEARS = [
        ('FIRST', 'FIRST'),
        ('SECOND', 'SECOND'),
        ('THIRD', 'THIRD'),
        ('FOURTH', 'FOURTH'),
    ]

    title = models.CharField(max_length=150)
    link = models.URLField(max_length=200)
    contributor = models.ForeignKey(
        Contributor, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
    college = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
    subject = models.ForeignKey(
        Subject, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
    branch = models.ForeignKey(
        Branch, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
    # course = models.ForeignKey(
    #     Course, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
    year = models.CharField(max_length=8, choices=YEARS, default='FIRST')
    # posted_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='materials')
    # date_posted = models.DateTimeField(default=timezone.now)
    # description = models.TextField()

    def __str__(self):
        return self.title


class Recommendation(models.Model):
    title = models.CharField(max_length=250)
    recommended_by_faculty = models.ForeignKey(
        Faculty, on_delete=models.DO_NOTHING, blank=True, null=True, related_name='recommendations')
    recommended_by_contributor = models.ForeignKey(
        Contributor, on_delete=models.DO_NOTHING, blank=True, null=True, related_name='recommendations')
    link = models.URLField(max_length=200)

    def __str__(self):
        return self.title


# class Portion(models.Model):
#     subject = models.ForeignKey(Subject, on_delete=models.DO_NOTHING, related_name="portions")
#     college = models.ForeignKey(College, on_delete=models.DO_NOTHING, related_name="portions")
#     branch = models.ForeignKey(Branch, on_delete=models.DO_NOTHING, related_name="portions", blank=True, null=True)
#     link = models.URLField(max_length=200)

#     def __str__(self):
#         return f"Syllabus for {self.subject.subject_code}, {self.branch.branch_code} of {self.college}"


class Gtimetable(models.Model):
    YEARS = [
        ('FIRST', 'FIRST'),
        ('SECOND', 'SECOND'),
        ('THIRD', 'THIRD'),
        ('FOURTH', 'FOURTH'),
    ]

    # title = models.CharField(max_length=150)
    gsheet_src = models.URLField(max_length=90)
    college = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, related_name="gsheettables")
    branch = models.ForeignKey(Branch, on_delete=models.DO_NOTHING,
                               related_name="gsheettables", blank=True, null=True)
    year = models.CharField(max_length=8, choices=YEARS, default='FIRST')

    class Meta:
        unique_together = ('college', 'branch', 'year')

    def __str__(self):
        return f"{self.college.college_code}: Timetable for {self.branch.branch_code} {self.year} year."


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
