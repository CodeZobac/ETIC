

from django.urls import path
from django.contrib.auth.decorators import login_required
from posts.views import PostListView


urlpatterns = [
   path("", login_required(PostListView.as_view()), name='posts'),
]
