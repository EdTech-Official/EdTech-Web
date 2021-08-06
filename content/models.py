from django.db import models


class Textbook(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    link = models.URLField(max_length=200)
    cover_image = models.URLField(max_length=200)


# Create your models here.
