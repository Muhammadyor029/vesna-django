from django.contrib import admin
from .models import MathTopic, MathTopicTranslation, MathPrompt, MultiplicationTable
for m in [MathTopic, MathTopicTranslation, MathPrompt, MultiplicationTable]:
    try: admin.site.register(m)
    except Exception: pass
