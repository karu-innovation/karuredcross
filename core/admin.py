from django.contrib import admin

from .models import *
admin.site.register(Blog)
admin.site.register(BlogCategory)
admin.site.register(BlogMedia)
admin.site.register(Leaders)
admin.site.resister(Events)
