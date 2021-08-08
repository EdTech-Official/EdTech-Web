from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime

# Create your models here.

# models to be defined college, branch, year,


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

    # class Meta:
    # unique_together = ('branch_code', 'college',)

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
    # portion_link = models.CharField(max_length=35, default="")

    # class Meta:
    #     unique_together = ('subject_code', 'college', 'branch',)

    def __str__(self):
        return f"({self.college.college_code}, {self.branch.branch_code}): {self.subject_code}: {self.name}"


class Portion(models.Model):
    link = models.URLField(max_length=35, default="")
    subject = models.ManyToManyField(
        Subject, related_name="portions")
    college = models.ManyToManyField(
        College, related_name='portions')
    branch = models.ManyToManyField(
        Branch, related_name='portions')
    year = models.ManyToManyField(
        Year, related_name='portions')
