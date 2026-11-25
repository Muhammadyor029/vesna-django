from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import MathTopicViewSet, MultiplicationView
r=DefaultRouter(); r.register('topics', MathTopicViewSet, basename='math-topics')
urlpatterns=[path('multiplication/', MultiplicationView.as_view(), name='multiplication')] + r.urls
