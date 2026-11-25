from django.contrib import admin
from .models import UserProgress, GameResult
for m in [UserProgress, GameResult]:
    try: admin.site.register(m)
    except Exception: pass
