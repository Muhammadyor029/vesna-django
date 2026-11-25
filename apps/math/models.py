from django.db import models
class MathTopic(models.Model):
    slug=models.SlugField(unique=True)
    order=models.PositiveSmallIntegerField(default=0)
    accent=models.CharField(max_length=16, blank=True)
    art=models.CharField(max_length=32, blank=True)
    class Meta: ordering=['order']
class MathTopicTranslation(models.Model):
    topic=models.ForeignKey(MathTopic,related_name='translations',on_delete=models.CASCADE)
    lang=models.CharField(max_length=8)
    title=models.CharField(max_length=120)
    sub=models.CharField(max_length=120, blank=True)
    desc=models.TextField(blank=True)
    class Meta: unique_together=('topic','lang')
class MathPrompt(models.Model):
    topic=models.ForeignKey(MathTopic,related_name='prompts',on_delete=models.CASCADE)
    lang=models.CharField(max_length=8, default='uz')
    question=models.TextField()
    options=models.JSONField(default=list)
    answer=models.CharField(max_length=120)
    explain=models.TextField(blank=True)
class MultiplicationTable(models.Model):
    n=models.PositiveSmallIntegerField(unique=True)
    rows=models.JSONField(default=list)  # [{"m":1,"result":2},...]
