from django.db import models
class GameCategory(models.Model):
    slug=models.SlugField(unique=True); title=models.CharField(max_length=64)
class Game(models.Model):
    external_id=models.PositiveSmallIntegerField(unique=True)
    title=models.CharField(max_length=120)
    category=models.ForeignKey(GameCategory,on_delete=models.SET_NULL,null=True,blank=True)
    description=models.TextField(blank=True)
    accent=models.CharField(max_length=16, blank=True)
    art=models.CharField(max_length=32, blank=True)
    bg=models.CharField(max_length=32, blank=True)
    game_type=models.CharField(max_length=64)
    config=models.JSONField(default=dict, blank=True)
    class Meta: ordering=['external_id']
class GameQuestion(models.Model):
    game=models.ForeignKey(Game,related_name='questions',on_delete=models.CASCADE)
    lang=models.CharField(max_length=8, default='uz')
    payload=models.JSONField(default=dict)
