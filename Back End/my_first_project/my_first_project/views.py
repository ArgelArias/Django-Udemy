from django.shortcuts import render

# Create your views here.

def index(request):
    my_dict = {'welcome': 'Welcome to project index page'}
    return render(request,'my_first_project/index.html',context=my_dict)
