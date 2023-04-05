from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(max_length=10000)
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)

    def to_json(self):
        return{
            'name': self.name,
            'price': self.price,
            'description':self.description,
            'count': self.count,
            'is_active': self.is_active
                           }
# Create your models here.
