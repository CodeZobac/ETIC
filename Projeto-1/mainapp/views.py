from django.shortcuts import render, HttpResponseRedirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .forms import NewFolderForm
from .models import Folder
from django.contrib import messages
from django.db import IntegrityError

# Create your views here.


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
