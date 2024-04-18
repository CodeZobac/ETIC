from django.urls import path
from products.views import ListAllProducts, ProductDetailView

from django.contrib.auth.decorators import login_required
from posts.views import PostListView


urlpatterns = [
    # path("",ListAllProducts.as_view(), name="products"),
    path("", login_required(ListAllProducts.as_view()), name="products"),
    path("<slug>", login_required(ProductDetailView.as_view()), name="product_detail"),
]
