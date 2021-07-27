# Generated by Django 3.2.5 on 2021-07-18 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_gsheettable'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterUniqueTogether(
            name='subject',
            unique_together={('subject_code', 'college')},
        ),
    ]
