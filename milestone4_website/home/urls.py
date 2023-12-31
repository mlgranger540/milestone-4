from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('shop', views.ShopPageView.as_view(), name='shop'),
    path('contact', views.ContactPageView.as_view(), name='contact'),
]