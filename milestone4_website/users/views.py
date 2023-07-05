from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.views.generic.base import TemplateView
from .forms import CustomUserCreationForm

class SignUpPageView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"

class ProfilePageView(TemplateView):
    template_name = 'profile.html'
