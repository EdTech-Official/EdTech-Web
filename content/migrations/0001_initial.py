# Generated by Django 3.2.5 on 2021-08-23 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contributor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('slug', models.SlugField(blank=True, max_length=120, null=True, unique=True)),
                ('instagram', models.URLField(blank=True, max_length=100)),
                ('twitter', models.URLField(blank=True, max_length=100)),
                ('linkedin', models.URLField(blank=True, max_length=100)),
            ],
        ),
    ]