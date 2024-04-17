from django.shortcuts import render
from django.views.generic import ListView, DetailView

from products.models import Product
# Create your views here.

class ListAllProducts(ListView):
    model=Product
    queryset=Product.objects.filter(enabled=True).all()


class ProductDetailView(DetailView):
    model=Product
    slug_field="name"