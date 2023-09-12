from django.db import models

# Create your models here.


class Fruit(models.Model):
    name = models.CharField(max_length=250)
    price = models.FloatField()
    image = models.TextField(null=True)

    def __str__(self):
        return self.name
