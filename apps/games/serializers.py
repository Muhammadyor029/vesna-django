from rest_framework import serializers
from .models import Game, GameQuestion, GameCategory
class GameCategorySerializer(serializers.ModelSerializer):
    class Meta: model=GameCategory; fields=['slug','title']
class GameQuestionSerializer(serializers.ModelSerializer):
    class Meta: model=GameQuestion; fields=['id','lang','payload']
class GameSerializer(serializers.ModelSerializer):
    category=GameCategorySerializer()
    questions=GameQuestionSerializer(many=True, read_only=True)
    class Meta: model=Game; fields=['external_id','title','category','description','accent','art','bg','game_type','config','questions']
