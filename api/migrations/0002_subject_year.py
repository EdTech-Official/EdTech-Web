# Generated by Django 3.2.5 on 2021-07-07 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='year',
            field=models.CharField(choices=[('FIRST', 'FIRST'), ('SECOND', 'SECOND'), ('THIRD', 'THIRD'), ('FOURTH', 'FOURTH')], default='FIRST', max_length=8),
        ),
    ]
