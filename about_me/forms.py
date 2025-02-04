from django import forms
from .models import User

class UserFrom(forms.ModelForm):
    model = User
    fiels = "__all__"
    widgets = {
        "name": forms.TextInput(attrs={'class': 'form-control'})
    }