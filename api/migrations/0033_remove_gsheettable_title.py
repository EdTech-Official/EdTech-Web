# Generated by Django 3.2.5 on 2021-07-19 13:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0032_subject_portion_link'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gsheettable',
            name='title',
        ),
    ]
