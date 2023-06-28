from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.
class HomePageView(TemplateView):
    template_name = 'index.html'

class ShopPageView(TemplateView):
    template_name = 'shop.html'

class ContactPageView(TemplateView):
    template_name = 'contact.html'
