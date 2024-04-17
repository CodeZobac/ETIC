
from django.contrib import admin
from django.urls import include, path

from products.views import ProductDetailView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("posts/", include("posts.urls")),
    path("products/", include("products.urls")),
    path("<slug>", ProductDetailView.as_view()),
]
