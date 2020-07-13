from django.contrib import admin
from my_first_app.models import *
# Register your models here.

admin.site.register(Topic)
admin.site.register(Webpage)
admin.site.register(AccessRecord)
