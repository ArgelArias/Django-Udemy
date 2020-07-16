from django.urls import path
from my_users_app import views

# FOR RELATIVE TAGGING
app_name = 'my_users_app'

urlpatterns = [
    path('',views.index,name='index'),
    path('index.html',views.index,name='index'),
    path('show_users.html',views.show_users,name='show_users'),
    path('insert_users.html',views.insert_users,name='insert_users')
]
