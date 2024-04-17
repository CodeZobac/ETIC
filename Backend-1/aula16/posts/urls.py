from django.urls import path
from django.views.generic import ListView
from django.contrib.auth.decorators import login_required
from posts.views import LoginView, PostListView

urlpatterns = [
    path("", login_required(PostListView.as_view())),
    path("login/", LoginView.as_view())

]
