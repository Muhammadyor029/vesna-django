from rest_framework.routers import DefaultRouter
from .views import GameViewSet
r=DefaultRouter(); r.register('',GameViewSet,basename='games')
urlpatterns=r.urls
