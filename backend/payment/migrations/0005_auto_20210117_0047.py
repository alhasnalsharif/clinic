# Generated by Django 3.1.5 on 2021-01-16 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0004_auto_20210117_0034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='amount_paid',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='bill',
            name='current_balance_before',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='bill',
            name='new_balance_after',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
