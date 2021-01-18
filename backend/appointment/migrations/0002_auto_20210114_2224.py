# Generated by Django 3.1.5 on 2021-01-14 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='amount_paid',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='current_balance_before',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='new_balance_after',
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
    ]