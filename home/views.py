from django.shortcuts import render, HttpResponse
from django.utils.translation import gettext as _

# Create your views here.

def home(request):
    trans = _('hello')
    return render(request, 'home.html', {'trans': trans})

def home(request):
    #contact form database
    # if request.method == 'POST':
    #     name == request.POST['name']
    #     email == request.POST['email']
    #     subject == request.POST['subject']
    #     message == request.POST['message']
    #     contact = models.Home(name=name, email=email, subject=subject, message=message)
    #     contact.save()
    return render(request, 'home.html')


def project(request):
    return render(request, 'project.html')


def contact(request):
    #contact form database
    if request.method == "POST":
        name == request.POST['name']
        email == request.POST['email']
        subject == request.POST['subject']
        message == request.POST['message']
        contact = models.Home(name=name, email=email, subject=subject, message=message)
        contact.save()
    return render(request, 'home.html')




