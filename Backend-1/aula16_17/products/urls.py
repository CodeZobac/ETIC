from django.urls import path
from products.views import ListAllProducts, ProductDetailView
from django.contrib.auth.decorators import login_required


urlpatterns = [
    path("", login_required(ListAllProducts.as_view()), name="products"),
    path("<slug>", login_required(ProductDetailView.as_view()), name="product_detail"),
]
