from django.contrib import admin
from .models import GameCategory, Game, GameQuestion
for m in [GameCategory, Game, GameQuestion]:
    try: admin.site.register(m)
    except Exception: pass
