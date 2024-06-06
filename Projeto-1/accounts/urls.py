from django.urls import path
from .views import user_login, logout_user, register
from django.contrib.auth import views as auth_views

app_name = "accounts"

urlpatterns = [
    path("login/", user_login, name="login"),
    path("logout/", auth_views.LogoutView.as_view(template_name='logged_out.html'), name="logout"),
    path("register/", register, name="register"),
]


