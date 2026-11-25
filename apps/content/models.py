from django.db import models
class Letter(models.Model):
    num=models.PositiveSmallIntegerField(unique=True)
    upper=models.CharField(max_length=4)
    lower=models.CharField(max_length=4)
    example=models.CharField(max_length=64)
    words=models.JSONField(default=list, blank=True)
    art=models.CharField(max_length=32, blank=True)
    hint=models.TextField(blank=True)
    kind=models.CharField(max_length=16, default='undosh')
    old=models.CharField(max_length=32, blank=True)
    class Meta: ordering=['num']
