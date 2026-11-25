from rest_framework import viewsets
from .models import Game
from .serializers import GameSerializer
class GameViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=Game.objects.select_related('category').prefetch_related('questions').all()
    serializer_class=GameSerializer
    lookup_field='external_id'
