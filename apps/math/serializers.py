from rest_framework import serializers
from .models import MathTopic, MathTopicTranslation, MathPrompt, MultiplicationTable
class MathTopicTranslationSerializer(serializers.ModelSerializer):
    class Meta: model=MathTopicTranslation; fields=['lang','title','sub','desc']
class MathPromptSerializer(serializers.ModelSerializer):
    class Meta: model=MathPrompt; fields=['lang','question','options','answer','explain']
class MathTopicSerializer(serializers.ModelSerializer):
    translations=MathTopicTranslationSerializer(many=True, read_only=True)
    prompts=MathPromptSerializer(many=True, read_only=True)
    class Meta: model=MathTopic; fields=['slug','order','accent','art','translations','prompts']
class MultiplicationTableSerializer(serializers.ModelSerializer):
    class Meta: model=MultiplicationTable; fields=['n','rows']
