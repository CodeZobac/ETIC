from django import forms


class LoginForm(forms.form):
    username= forms.CharField(required=True)
    passowrd = forms.CharField(widget=forms.PasswordInput, required=True)