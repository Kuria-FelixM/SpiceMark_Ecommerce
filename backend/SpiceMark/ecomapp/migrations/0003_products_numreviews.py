# Generated by Django 5.1.7 on 2025-04-01 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0002_products_productname'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='numReviews',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
