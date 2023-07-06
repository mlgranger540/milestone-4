from django.urls import path
from . import views

urlpatterns = [
    path('config/', views.stripe_config), 
    path('create-checkout-session/', views.create_checkout_session), # new
    path('success/', views.SuccessView.as_view()),
    path('cancelled/', views.CancelledView.as_view()),
    path('webhook/', views.stripe_webhook), # new
    path('cart', views.CartPageView.as_view(), name='cart'),
    path('<str:username>', views.get_orders, name='orders')
]