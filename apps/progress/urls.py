from django.urls import path
from .views import ProgressMeView, GameResultCreateView
urlpatterns=[path('me/',ProgressMeView.as_view(),name='progress-me'), path('results/',GameResultCreateView.as_view(),name='progress-results')]
