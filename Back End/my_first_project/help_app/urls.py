from django.urls import path
from help_app import views

# Create your views here.
urlpatterns = [
    path('',views.help,name='help')
]
