from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from .models import Profile
from .forms import LoginForm, UserRegistration, UserEditForm, ProfileEditForm
from django.forms.models import model_to_dict
from django.contrib.auth.models import User
from django.contrib import messages

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

def profile(request):
    profile = get_object_or_404(Profile, user__username=request.user)
    user = get_object_or_404(User, username=request.user)
    if request.method == "POST":
        user_form = UserEditForm(instance=request.user, data=request.POST)
        profile_form = ProfileEditForm(instance=request.user.profile, data=request.POST, files=request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            messages.success(request, "Profile updated successfully")
            profile = get_object_or_404(Profile, user__username=request.user)
        else:
            messages.error(request, "Error updating your profile")
    else:
        user_form = UserEditForm(initial=model_to_dict(user))
        profile_form = ProfileEditForm(initial=model_to_dict(profile))
    return render(request, "profile.html", {
        "profile": profile,
        "user_form": user_form,
        "profile_form": profile_form
        })
