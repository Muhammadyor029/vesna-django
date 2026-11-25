from rest_framework import viewsets
from .models import Letter
from .serializers import LetterSerializer
class LetterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=Letter.objects.all()
    serializer_class=LetterSerializer
