from django.contrib import admin
from posts.models import Post
# Register your models here.

@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    list_display=("title","content","user")


# admin.site.register(Post,PostsAdmin)