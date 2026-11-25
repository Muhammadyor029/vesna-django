from django.contrib import admin
from .models import Letter
for m in [Letter]:
    try: admin.site.register(m)
    except Exception: pass
