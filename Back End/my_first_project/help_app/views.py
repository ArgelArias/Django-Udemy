from django.shortcuts import render

# Create your views here.

def help(request):
    my_dict_help = {'help_info': 'This is the help info from Python using Django'}
    return render(request,'help_app/help.html',context=my_dict_help)
