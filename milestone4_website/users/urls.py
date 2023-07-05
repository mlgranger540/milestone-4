from django.urls import path
from . import views
from .views import SignUpPageView

urlpatterns = [
    path("signup", SignUpPageView.as_view(), name="signup"),
    path("profile", views.ProfilePageView.as_view(), name="profile")
]
