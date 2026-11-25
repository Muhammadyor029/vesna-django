from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
import os

class Command(BaseCommand):
    def handle(self, *args, **opts):
        U=get_user_model()
        u=os.getenv('DJANGO_ADMIN_USER','admin')
        p=os.getenv('DJANGO_ADMIN_PASSWORD')
        e=os.getenv('DJANGO_ADMIN_EMAIL','admin@example.com')
        if not p:
            self.stdout.write('DJANGO_ADMIN_PASSWORD not set')
            return
        obj, created = U.objects.get_or_create(username=u, defaults={'email':e,'is_staff':True,'is_superuser':True})
        if not created:
            obj.is_staff=True; obj.is_superuser=True; obj.email=e
        obj.set_password(p)
        obj.save()
        self.stdout.write('admin ready')
