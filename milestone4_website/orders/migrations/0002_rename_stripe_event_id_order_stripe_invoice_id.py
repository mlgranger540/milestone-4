# Generated by Django 3.2 on 2023-06-24 22:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='stripe_event_id',
            new_name='stripe_invoice_id',
        ),
    ]
