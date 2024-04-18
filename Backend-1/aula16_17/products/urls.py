from django.urls import path
from products.views import ListAllProducts, ProductDetailView


urlpatterns=[
    path("",ListAllProducts.as_view(), name="products"),
    path("<slug>", ProductDetailView.as_view(), name="product_detail")
]