from rest_framework import serializers
from .models import UserProgress, GameResult
class GameResultSerializer(serializers.ModelSerializer):
    class Meta: model=GameResult; fields=['id','session_key','game_external_id','score','payload','created_at']
class UserProgressSerializer(serializers.ModelSerializer):
    class Meta: model=UserProgress; fields=['session_key','stars','updated_at']
