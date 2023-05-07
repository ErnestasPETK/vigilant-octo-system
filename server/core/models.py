from django.db import models


class Product(models.Model):
    """
    Product.
    """

    id = models.AutoField(primary_key=True)
    image = models.URLField(max_length=2048)
    title = models.TextField(max_length=255)
    brand = models.TextField(max_length=255)
    description = models.TextField(max_length=2048)
    price = models.IntegerField()
    category = models.TextField(max_length=255)
    thumbnail = models.URLField(max_length=2048)
