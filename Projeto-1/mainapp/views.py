from django.shortcuts import render, HttpResponseRedirect, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .forms import NewFolderForm
from .models import Folder, File, get_folder_location
from django.contrib import messages
from django.db import IntegrityError
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from http import HTTPStatus
from django.http import FileResponse
import json
import os

@login_required
def home(request):
    folders = request.user.folders.filter(folder=None)
    return render(request, "home.html", {"folders": folders})

@login_required
def create_new_folder(request):
    if request.method == "POST":
        if request.session["redirected_from"] is None:
            messages.error(
                request,
                "Folder not created!  You are not allowed to access this page directly.",
            )
            return HttpResponseRedirect("/")
        form = NewFolderForm(request.POST)

        if form.is_valid():
            form = form.save(commit=False)
            form.user = request.user  # Currently logged in user
            redirected_from = request.session["redirected_from"].split("/")
            if redirected_from[3] != "":  # Creating folder in a folder
                pk = redirected_from[-1]
                form.folder = get_object_or_404(Folder, pk=pk)
            try:
                form.save()
                path = get_folder_location(form)
                os.makedirs(path, exist_ok=True)
            except IntegrityError:
                messages.error(request, "Folder with this name already exists!")
            return HttpResponseRedirect(request.session["redirected_from"])
    else:
        request.session["redirected_from"] = request.META.get("HTTP_REFERER")
        createfolder = NewFolderForm()
    return render(request, "create_new_folder.html", {"createfolder": createfolder})

@login_required
def open_folder(request, pk):
    try:
        folder = get_object_or_404(Folder, pk=pk)
    except:
        messages.error(request, "Folder not found!")
        return HttpResponseRedirect("/")
    return render(request, "openFolder.html", {"folder": folder})

@login_required
def upload_file(request):

    uploaded_file = request.FILES.get("uploadfile")
    folder_id = request.POST.get("fid")
    folder = get_object_or_404(Folder, pk=folder_id)
    try:
        File.objects.create(folder=folder, files=uploaded_file)
    except:
        messages.error(request, "Please chose a file")
    return redirect("mainapp:open_folder", pk=folder_id)

@login_required
def delete_file(request):
    if request.method == "POST":
        data = json.loads(request.body)
        pk = data.get("pk")
        user = data.get("user")

        if request.user.username != user:
            return JsonResponse({"error": "Unauthorized user", "status": HTTPStatus.UNAUTHORIZED})

        delfile = get_object_or_404(File, pk=pk)
        delfile.delete()

        return JsonResponse({delfile.filename: "Deleted", "status": HTTPStatus.OK})

    return JsonResponse(
        {"error": "Invalid request method", "status": HTTPStatus.METHOD_NOT_ALLOWED})

@login_required
def delete_folder(request, pk):
    folder = get_object_or_404(Folder, pk=pk)
    try:
        fid = folder.folder.pk
    except:
        return redirect("mainapp:home")
    else:
        return redirect("mainapp:open_folder", pk=fid)
    finally:
        folder.delete()


@login_required
def download(request, pk):
    file_instance = get_object_or_404(File, pk=pk)
    file_path = file_instance.files.path
    return FileResponse(open(file_path, 'rb'), as_attachment=True, filename=file_instance.files.name)
