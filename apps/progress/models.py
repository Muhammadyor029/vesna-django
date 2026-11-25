from django.db import models
class UserProgress(models.Model):
    session_key=models.CharField(max_length=64, db_index=True)
    stars=models.PositiveIntegerField(default=0)
    updated_at=models.DateTimeField(auto_now=True)
class GameResult(models.Model):
    session_key=models.CharField(max_length=64, db_index=True)
    game_external_id=models.PositiveSmallIntegerField()
    score=models.IntegerField(default=0)
    payload=models.JSONField(default=dict, blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
