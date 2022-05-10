from django.shortcuts import render

# Create your views here.

def IndexView(request, *args, **kwargs):
    return render(request, 'index.html', {})

def ContactUsView(request, *args, **kwargs):
    return render(request, 'contactus.html', {})

def AboutUsView(request, *args, **kwargs):
    return render(request, 'about-us.html', {})

def TeamView(request, *args, **kwargs):
    return render(request, 'team.html', {})

def EventsView(request, *args, **kwargs):
    return render(request, 'events.html', {})

def GalleryView(request, *args, **kwargs):
    return render(request, 'gallery.html', {})