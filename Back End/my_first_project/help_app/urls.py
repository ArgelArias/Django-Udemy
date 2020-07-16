from django.urls import path
from help_app import views

# FOR RELATIVE TAGGING
app_name = 'help_app'

# Create your views here.
urlpatterns = [
    path('',views.help,name='help')
]
