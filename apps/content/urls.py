from rest_framework.routers import DefaultRouter
from .views import LetterViewSet
r=DefaultRouter(); r.register('letters',LetterViewSet,basename='letters')
urlpatterns=r.urls
