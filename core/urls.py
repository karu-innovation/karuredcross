from django.urls import path
from .views import BlogView, IndexView, AboutUsView, ContactUsView, TeamView

app_name = 'core'

urlpatterns = [
    path('', IndexView, name='index'),
    path('our-team/', TeamView, name='team-view'),
    path('contact-us/', ContactUsView, name='contact-us'),
    path('about-us/', AboutUsView, name='about-us'),
    path('blog-us/', BlogView, name='blog'),
]
