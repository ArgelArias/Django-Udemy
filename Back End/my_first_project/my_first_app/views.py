from django.shortcuts import render
#from django.http import HttpResponse
from my_first_app.models import *

# Create your views here.

def index(request):
    my_dict = {'inserted': 'This is an inserted line from python using Django'}
    return render(request,'my_first_app/index.html',context=my_dict)
    #return HttpResponse("<h1>Hello World!</h1>")

def access_record(request):
    webpages_list = AccessRecord.objects.order_by('date')
    my_dict = {'access_record': webpages_list}
    return render(request,'my_first_app/access_record.html',context=my_dict)
