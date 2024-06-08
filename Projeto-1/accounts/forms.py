from django import forms
from django.contrib.auth.models import User
from .models import Profile

class LoginForm(forms.Form):
    username = forms.CharField(label="Username", widget=forms.TextInput(attrs={"class": "form-control"}), max_length=100)
    password = forms.CharField(
        label="Password", max_length=100, widget=forms.PasswordInput(attrs={"class": "form-control"})
    )

class UserRegistration(forms.ModelForm):
    password = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Repeat Password", widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ("username", "first_name", "email")

    def clean_password2(self):
        cd = self.cleaned_data
        if cd["password"] != cd["password2"]:
            raise forms.ValidationError("Passwords don't match.")
        return cd["password2"]

class UserEditForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email")

class ProfileEditForm(forms.ModelForm):
    photo = forms.ImageField(widget=forms.widgets.FileInput)
    class Meta:
        model = Profile
        fields = ("photo",)