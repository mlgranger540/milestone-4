# Generated by Django 3.2 on 2023-06-24 09:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product_stripe_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='description',
        ),
        migrations.RemoveField(
            model_name='product',
            name='price',
        ),
    ]
