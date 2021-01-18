# Generated by Django 3.1.5 on 2021-01-10 00:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('treatment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount_paid', models.IntegerField()),
                ('current_balance_before', models.IntegerField()),
                ('new_balance_after', models.IntegerField()),
                ('date', models.DateField(auto_now=True)),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('treatment', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='treatment.treatment')),
            ],
        ),
    ]