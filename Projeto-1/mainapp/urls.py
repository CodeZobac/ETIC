from django.urls import path
from . import views


app_name = "mainapp"

urlpatterns = [
    path("", views.home, name="home"),
    path("create-folder", views.create_new_folder, name="create_new_folder"),
    path("folder/<str:pk>", views.open_folder, name="open_folder"),
    path("upload-new-file/", views.upload_file,  name="upload_file"),
    path("delete_file/", views.delete_file, name="delete_file"),
    path("delete_folder/<str:pk>", views.delete_folder, name="delete_folder")
]
