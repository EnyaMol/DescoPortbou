from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
import Rutes
from Rutes.models import Ruta


def json(request):
    rutas = Ruta.objects.all()
    nomruta = Ruta.nomruta
    descripcio = Ruta.descripcio
    distancia_km = Ruta.distancia_km
    dificultat = Ruta.dificultat
    categoria = {'nomruta': nomruta, 'descripcio': descripcio, 'distanciakm' : distancia_km,'dificultat': dificultat}


    return JsonResponse(categoria)
