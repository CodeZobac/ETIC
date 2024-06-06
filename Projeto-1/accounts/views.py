from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from .forms import LoginForm, UserRegistration

def user_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd["username"], password=cd["password"])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponse("Authenticated successfully")
            else:
                return HttpResponse("Invalid login")
    else:
        form = LoginForm()
    return render(request, "login.html", {"form": form})

def logout_user(request):
    logout(request)
    return render(request, "logged_out.html")

def register(request):
    if request.method == "POST":
        form = UserRegistration(request.POST)
        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.set_password(form.cleaned_data["password"])
            new_user.save()
            return render(request, "registration/registration_done.html")
    else:
        form = UserRegistration()
    return render(request, 'registration/register.html', {"user_form": form})
