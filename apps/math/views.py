from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MathTopic, MultiplicationTable
from .serializers import MathTopicSerializer, MultiplicationTableSerializer
class MathTopicViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=MathTopic.objects.prefetch_related('translations','prompts').all()
    serializer_class=MathTopicSerializer
    lookup_field='slug'
class MultiplicationView(APIView):
    def get(self, request):
        n=request.query_params.get('n')
        qs=MultiplicationTable.objects.all().order_by('n')
        if n: qs=qs.filter(n=n)
        return Response(MultiplicationTableSerializer(qs,many=True).data)
