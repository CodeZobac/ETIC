from django.shortcuts import render, HttpResponseRedirect, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .forms import NewFolderForm
from .models import Folder, File
from django.contrib import messages
from django.db import IntegrityError
from django.core.files.storage import FileSystemStorage

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


def upload_file(request):
    
    uploaded_file = request.FILES.get("uploadfile")
    folder_id = request.POST.get("fid")
    folder = get_object_or_404(Folder, pk=folder_id)
    File.objects.create(folder=folder, files=uploaded_file)
    File.save()
    return redirect("mainapp:open_folder", pk=folder_id)
    




# def upload_file(request):
#     if request.method == 'POST':
#         upload_file = request.FILES['uploadfile']
#         fs = FileSystemStorage()
#         filename = fs.save(upload_file.name, upload_file)
#         file_url = fs.url(filename)

#         # Assuming you have a File model to store file metadata
#         folder_id = request.POST.get('fid')
#         folder = get_object_or_404(Folder, pk=folder_id)
#         File.objects.create(
#             folder=folder,
#             file=filename,
#             uploaded_by=request.user
#         )

#         return redirect('mainapp:folder_detail', pk=folder_id)

#     return render(request, 'upload_file.html')