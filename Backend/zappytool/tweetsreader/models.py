from djongo import models
# Create your models here.


class Tweet(models.Model):
    body = models.CharField(max_length=4000, null=False)
    date = models.CharField(max_length=30, null=False)
