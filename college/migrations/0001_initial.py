# Generated by Django 3.2.5 on 2021-08-23 16:17

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('branch_code', models.CharField(max_length=8, unique=True)),
                ('name', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='College',
            fields=[
                ('college_code', models.CharField(max_length=12, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=180)),
                ('established', models.PositiveIntegerField(default=2021, validators=[django.core.validators.MinValueValidator(1900), django.core.validators.MaxValueValidator(2050)])),
                ('location', models.CharField(max_length=30)),
                ('full_address', models.CharField(blank=True, default='', max_length=200)),
                ('link_image', models.URLField(blank=True)),
                ('website_link', models.URLField(blank=True)),
                ('static_map_src', models.URLField(blank=True, max_length=330)),
                ('email', models.EmailField(blank=True, max_length=100)),
                ('linkedin', models.URLField(blank=True, max_length=60)),
                ('instagram', models.URLField(blank=True, max_length=60)),
                ('facebook', models.URLField(blank=True, max_length=60)),
                ('twitter', models.URLField(blank=True, max_length=60)),
                ('youtube', models.URLField(blank=True, max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Year',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(choices=[('FIRST', 'FIRST'), ('SECOND', 'SECOND'), ('THIRD', 'THIRD'), ('FOURTH', 'FOURTH')], default='FIRST', max_length=8, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject_code', models.CharField(max_length=8, unique=True)),
                ('name', models.CharField(max_length=150)),
                ('branches', models.ManyToManyField(related_name='subjects', to='college.Branch')),
                ('colleges', models.ManyToManyField(related_name='subjects', to='college.College')),
                ('years', models.ManyToManyField(related_name='subjects', to='college.Year')),
            ],
        ),
        migrations.CreateModel(
            name='Portion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.URLField(default='', max_length=35)),
                ('branches', models.ManyToManyField(related_name='portions', to='college.Branch')),
                ('colleges', models.ManyToManyField(related_name='portions', to='college.College')),
                ('subjects', models.ManyToManyField(related_name='portions', to='college.Subject')),
                ('years', models.ManyToManyField(related_name='portions', to='college.Year')),
            ],
        ),
        migrations.CreateModel(
            name='Gtimetable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gsheet_src', models.URLField(max_length=90)),
                ('branch', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='gsheettables', to='college.branch')),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='gsheettables', to='college.college')),
                ('year', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='gsheettables', to='college.year')),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('designation', models.CharField(max_length=80)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(blank=True, max_length=17)),
                ('is_teaching_staff', models.BooleanField(default=True)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='faculty', to='college.branch')),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='faculty', to='college.college')),
            ],
        ),
        migrations.AddField(
            model_name='branch',
            name='colleges',
            field=models.ManyToManyField(related_name='branches', to='college.College'),
        ),
    ]