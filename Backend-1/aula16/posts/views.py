from django.shortcuts import render
from django.views.generic import ListView, TemplateView, FormView
from posts.forms import LoginForm
from posts.models import Post
from django.contrib.auth import authenticate, login
# Create your views here.

class PostListView(ListView):
    model=Post

class LoginView(FormView):
    formclass=LoginForm
    success_url="/posts/"
    template_name="posts/login.html"

    def form_valid(self,form):
        username = form.cleaned_data["username"]
        password = form.cleaned_data["password"]
        if authenticate(username=username,password=password):
            login(self.request,authenticate(username=username,password=password))
        return super().form_valid(form)