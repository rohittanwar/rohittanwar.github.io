from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request,'website/home.html')

def index(request):
    return render(request,'website/home.html')

def test(request):
    return render(request,'website/test.html')