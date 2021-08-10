from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from edtech_dj.util import unique_slug_generator


class Contributor(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=120, null=True, blank=True, unique=True)
    instagram = models.URLField(max_length=100, blank=True)
    twitter = models.URLField(max_length=100, blank=True)
    linkedin = models.URLField(max_length=100, blank=True)

    def __str__(self):
        return self.name


@receiver(pre_save, sender=Contributor)
def pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


# class Material(models.Model):
#     title = models.CharField(max_length=150)
#     link = models.URLField(max_length=200)
#     contributors = models.ManyToManyField(
#         Contributor, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
#     colleges = models.ForeignKey(
#         College, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
#     subjectes = models.ForeignKey(
#         Subject, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
#     branches = models.ForeignKey(
#         Branch, on_delete=models.DO_NOTHING, related_name="materials", blank=True, null=True)
#     years = models.CharField(max_length=8, choices=YEARS, default='FIRST')

#     def __str__(self):
#         return self.title


# class Recommendation(models.Model):
#     title = models.CharField(max_length=250)
#     recommended_by_faculty = models.ForeignKey(
#         Faculty, on_delete=models.DO_NOTHING, blank=True, null=True, related_name='recommendations')
#     recommended_by_contributor = models.ForeignKey(
#         Contributor, on_delete=models.DO_NOTHING, blank=True, null=True, related_name='recommendations')
#     link = models.URLField(max_length=200)

#     def __str__(self):
#         return self.title
