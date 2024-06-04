from django.shortcuts import render, HttpResponse
from .forms import LoginForm

# Create your views here.


def user_login(request):
    form = LoginForm()
    return render(request, "login.html", context={"form": form})
