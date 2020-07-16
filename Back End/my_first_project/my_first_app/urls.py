from django.urls import path, re_path
from my_first_app import views

# FOR RELATIVE TAGGING
app_name = 'my_first_app'

urlpatterns = [
    path('',views.index,name='index'),
    re_path(r'index.*',views.index,name='index'),
    re_path(r'access_record.*',views.access_record,name='access_record'),
]
