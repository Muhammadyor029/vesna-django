from django.urls import path, include
urlpatterns=[
 path('content/', include('apps.content.urls')),
 path('games/', include('apps.games.urls')),
 path('math/', include('apps.math.urls')),
 path('progress/', include('apps.progress.urls')),
]
