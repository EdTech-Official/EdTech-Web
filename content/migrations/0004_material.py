# Generated by Django 3.2.5 on 2021-08-14 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('college', '0007_gtimetable'),
        ('content', '0003_textbook'),
    ]

    operations = [
        migrations.CreateModel(
            name='Material',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('link', models.URLField()),
                ('branches', models.ManyToManyField(blank=True, null=True, related_name='materials', to='college.Branch')),
                ('colleges', models.ManyToManyField(blank=True, null=True, related_name='materials', to='college.College')),
                ('contributors', models.ManyToManyField(blank=True, null=True, related_name='materials', to='content.Contributor')),
                ('subjects', models.ManyToManyField(blank=True, null=True, related_name='materials', to='college.Subject')),
                ('years', models.ManyToManyField(related_name='materials', to='college.Year')),
            ],
        ),
    ]