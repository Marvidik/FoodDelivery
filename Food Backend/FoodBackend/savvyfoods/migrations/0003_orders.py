# Generated by Django 5.0.3 on 2024-04-07 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("savvyfoods", "0002_rename_delivery_fee_foods_deliveryfee_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Orders",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("address", models.CharField(max_length=100)),
                ("orders", models.TextField(max_length=100)),
                ("paid", models.BooleanField(default=False)),
            ],
        ),
    ]
