from django.urls import path
from .views import IndexView, AboutUsView


urlpatterns = [
    path('', IndexView, name='index'),
    path('about-us/', AboutUsView, name='about-us'),
]
