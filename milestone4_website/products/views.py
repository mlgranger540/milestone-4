import json
import stripe
from decimal import Decimal
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.contrib.auth.decorators import login_required
from products.models import Product

# Create your views here.
def get_product(request,product_id):
    product_obj = Product.objects.get(id = product_id)
    stripe_json = stripe.Product.retrieve(product_obj.stripe_id)
    # Add stock left from database
    stripe_json.stock_left = product_obj.quantity
    # Add price info from Stripe
    price = stripe.Price.retrieve(stripe_json.default_price)
    print(price)
    stripe_json.price = str(Decimal(price.unit_amount_decimal) / 100) # JSON doesnt support decimal
    return HttpResponse(json.dumps(stripe_json), content_type='application/json')

def get_all_products(request):
    product_objs = Product.objects.all()
    all_products = stripe.Product.list()
    for x in all_products.data:
        indiv_product = Product.objects.get(stripe_id = x.id)
        price = stripe.Price.retrieve(x.default_price)
        # Add stock left from database
        x.stock_left = indiv_product.quantity   
        # Add product ID from database
        x.db_id = indiv_product.id
        # Add price info from Stripe
        x.price = str(Decimal(price.unit_amount_decimal) / 100) # JSON doesnt support decimal
    return HttpResponse(json.dumps(all_products), content_type='application/json')

class ProductPageView(TemplateView):
    template_name = 'product.html'
