from django.shortcuts import render
from django.views.generic import ListView
from posts.models import Post
# Create your views here.

class PostListView(ListView):
    model=Post
