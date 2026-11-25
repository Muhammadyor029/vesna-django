from django.urls import path
from .views import page
urlpatterns=[
 path('',page,{'name':'sphere'},name='sphere'),
 path('games/',page,{'name':'games'},name='games'),
 path('alphabet/',page,{'name':'alphabet'},name='alphabet'),
 path('math/',page,{'name':'math'},name='math'),
 path('guide/',page,{'name':'guide'},name='guide'),
]
