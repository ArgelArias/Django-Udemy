from django.shortcuts import render
from my_users_app.models import User
from . import forms

# Create your views here.

def index(request):
    my_dict = {'welcome': 'Welcome to the users APP Index page'}
    return render(request, 'my_users_app/index.html',context=my_dict)

def insert_users(request):
    form = forms.MyUserForm()
    return render(request, 'my_users_app/insert_users.html', {'form': form})

def show_users(request):
    users_list = User.objects.order_by('first_name')
    my_dict = {'users': users_list}
    return render(request, 'my_users_app/show_users.html',context=my_dict)
