from django.db import models

# Create your models here.


class Junks(models.Model):
    junk=models.CharField(max_length=100)
    image=models.ImageField(upload_to="junks")
    price=models.IntegerField()
    rating=models.IntegerField()
    deliveryfee=models.IntegerField()
    deliverytime=models.CharField(max_length=20)
    description=models.TextField()
    price=models.IntegerField()




class Foods(models.Model):
    image=models.ImageField(upload_to="foods")
    fastfood=models.CharField(max_length=100)
    contents=models.CharField(max_length=100)
    rating=models.IntegerField()
    deliveryfee=models.IntegerField()
    deliverytime=models.CharField(max_length=20)
    description=models.TextField()
    price=models.IntegerField()



class SeenOrders(models.Model):
    name=models.CharField(max_length=100)
    address=models.CharField(max_length=100)
    orders=models.TextField(max_length=100)
    paid=models.BooleanField(default=False)