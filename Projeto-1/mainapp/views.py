from django.shortcuts import render, HttpResponseRedirect, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .forms import NewFolderForm
from .models import Folder, File
from django.contrib import messages
from django.db import IntegrityError
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from http import HTTPStatus
import json


@login_required
def home(request):
    folders = request.user.folders.filter(folder=None)
    return render(request, "home.html", {"folders": folders})


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
            except IntegrityError:
                messages.error(request, "Folder with this name already exists!")
            return HttpResponseRedirect(request.session["redirected_from"])
    else:
        request.session["redirected_from"] = request.META.get("HTTP_REFERER")
        createfolder = NewFolderForm()
    return render(request, "create_new_folder.html", {"createfolder": createfolder})



def open_folder(request, pk):
    try:
        folder = get_object_or_404(Folder, pk=pk)
    except:
        messages.error(request, "Folder not found!")
        return HttpResponseRedirect("/")
    return render(request, "openFolder.html", {"folder": folder})


def upload_file(request):
    
    uploaded_file = request.FILES.get("uploadfile")
    folder_id = request.POST.get("fid")
    folder = get_object_or_404(Folder, pk=folder_id)
    File.objects.create(folder=folder, files=uploaded_file)
    return redirect("mainapp:open_folder", pk=folder_id)


def delete_file(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            pk = data.get('pk')
            user = data.get('user')

            if request.user.username != user:
                raise Exception("Unauthorized user")

            delfile = get_object_or_404(File, pk=pk)
            delfile.delete()
            return JsonResponse({
                delfile.filename: "Deleted",
                "status": HTTPStatus.OK
            })
        except Exception as e:
            return JsonResponse({
                "error": str(e),
                "status": HTTPStatus.NOT_FOUND
            })

    return JsonResponse({
        "error": "Invalid request method",
        "status": HTTPStatus.METHOD_NOT_ALLOWED
    })

def download(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            pk = data.get('pk')
            user = data.get('user')

            if request.user.username != user:
                raise Exception("Unauthorized user")

            delfile = get_object_or_404(File, pk=pk)
            file = delfile.files
            fs = FileSystemStorage()
            filename = fs.save(file.name, file)
            return JsonResponse({
                "filename": filename,
                "status": HTTPStatus.OK
            })
        except Exception as e:
            return JsonResponse({
                "error": str(e),
                "status": HTTPStatus.NOT_FOUND
            })

    return JsonResponse({
        "error": "Invalid request method",
        "status": HTTPStatus.METHOD_NOT_ALLOWED
    })