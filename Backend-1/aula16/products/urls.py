from django.urls import path
from products.views import ListAllProducts


urlpatterns=[
    path("all",ListAllProducts.as_view())
]