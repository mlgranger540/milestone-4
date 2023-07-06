from django.urls import path
from . import views

urlpatterns = [
    path('product/<int:product_id>/', views.get_product, name='product'),
    path('all/', views.get_all_products, name='products'),
    path('<int:product_id>', views.ProductPageView.as_view(), name='product_page'),
]