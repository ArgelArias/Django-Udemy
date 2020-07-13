from django import forms
from my_users_app.models import User

class MyUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
