from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def start(request):
    return render(request,'website/start.html')

def index(request):
    return render(request,'website/home.html')