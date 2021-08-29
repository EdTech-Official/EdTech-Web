from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime

# Create your models here.


class College(models.Model):
    """ Model for all the Colleges """

    college_code = models.CharField(
        max_length=12, unique=True, primary_key=True)
    name = models.CharField(max_length=180)
    established = models.PositiveIntegerField(default=datetime.date.today(
    ).year, validators=[MinValueValidator(1900), MaxValueValidator(2050)])
    location = models.CharField(max_length=30)
    full_address = models.CharField(max_length=200, default="", blank=True)
    link_image = models.URLField(max_length=200, blank=True)
    website_link = models.URLField(max_length=200, blank=True)
    static_map_src = models.URLField(max_length=330, blank=True)
    email = models.EmailField(max_length=100, blank=True)
    linkedin = models.URLField(max_length=60, blank=True)
    instagram = models.URLField(max_length=60, blank=True)
    facebook = models.URLField(max_length=60, blank=True)
    twitter = models.URLField(max_length=60, blank=True)
    youtube = models.URLField(max_length=60, blank=True)

    def __str__(self):
        return self.name


class Branch(models.Model):
    """ Model for all the Branches """
    branch_code = models.CharField(max_length=8, unique=True)
    colleges = models.ManyToManyField(
        College, related_name='branches')
    name = models.CharField(max_length=150)

    def __str__(self):
        return f"{self.branch_code}: {self.name}"


class Year(models.Model):
    """ Model for all the Year """

    YEARS = [
        ('FIRST', 'FIRST'),
        ('SECOND', 'SECOND'),
        ('THIRD', 'THIRD'),
        ('FOURTH', 'FOURTH'),
    ]

    year = models.CharField(max_length=8, choices=YEARS,
                            default='FIRST', unique=True)
    colleges = models.ManyToManyField(
        College, related_name='years')

    def __str__(self):
        return f"{self.year}"


class Subject(models.Model):

    """Model for all the Subjects"""

    subject_code = models.CharField(max_length=8, unique=True)
    colleges = models.ManyToManyField(
        College, related_name='subjects')
    branches = models.ManyToManyField(
        Branch, related_name='subjects')
    name = models.CharField(max_length=150)
    years = models.ManyToManyField(
        Year, related_name='subjects')

    def __str__(self):
        return f"({self.college.college_code}, {self.branch.branch_code}): {self.subject_code}: {self.name}"


class Portion(models.Model):
    link = models.URLField(max_length=35, default="")
    subjects = models.ManyToManyField(
        Subject, related_name="portions")
    colleges = models.ManyToManyField(
        College, related_name='portions')
    branches = models.ManyToManyField(
        Branch, related_name='portions')
    years = models.ManyToManyField(
        Year, related_name='portions')


class Faculty(models.Model):
    """Model for all Faculty"""
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=80)
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=17, blank=True)
    branch = models.ForeignKey(
        Branch, on_delete=models.DO_NOTHING, blank=False, related_name='faculty')
    college = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, blank=False, related_name='faculty')
    is_teaching_staff = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Gtimetable(models.Model):
    gsheet_src = models.URLField(max_length=90)
    college = models.ForeignKey(
        College, on_delete=models.DO_NOTHING, related_name="gsheettables")
    branch = models.ForeignKey(Branch, on_delete=models.DO_NOTHING,
                               related_name="gsheettables", blank=True, null=True)
    year = models.ForeignKey(Year, on_delete=models.DO_NOTHING,
                             related_name="gsheettables", blank=True, null=True)

    def __str__(self):
        return f"{self.college.college_code}: Timetable for {self.branch.branch_code} {self.year.year} year."
