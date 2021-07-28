"""
WSGI config for edtech_dj project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'edtech_dj.settings')

application = get_wsgi_application()

# For Heroku || ref: 'https://www.youtube.com/watch?v=r0ECufCyyyw'   ~ Deep Shetye  + 1 line
application = WhiteNoise(application)
