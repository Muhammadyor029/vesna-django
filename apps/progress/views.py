from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserProgress, GameResult
from .serializers import UserProgressSerializer, GameResultSerializer
class ProgressMeView(APIView):
    def get(self, request):
        key=request.query_params.get('session_key','anon')
        obj,_=UserProgress.objects.get_or_create(session_key=key)
        return Response(UserProgressSerializer(obj).data)
class GameResultCreateView(generics.CreateAPIView):
    queryset=GameResult.objects.all(); serializer_class=GameResultSerializer
