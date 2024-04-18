from django.shortcuts import render
from django.views.generic import ListView, DetailView

from products.models import Product
# Create your views here.

class ListAllProducts(ListView):
    model=Product
    queryset=Product.objects.filter(enabled=True).all()


# Exercicio:
# - cria página de detalhe de produto 
# - Para isso terás de criar a view, criar a template e de seguida adaptar a template de list
# para adicionar um <a> a cada item de modo a que linke com a respetiva página de detalhe.

class ProductDetailView(DetailView):
    model=Product
    slug_field="name"