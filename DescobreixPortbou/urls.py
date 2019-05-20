"""DescobreixPortbou URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index.html"), name="index"),
    path('inici/', TemplateView.as_view(template_name="index.html"), name="index"),
    path('rutes/', TemplateView.as_view(template_name="rutes.html"), name="rutes"),
    path('rutes/ruta', TemplateView.as_view(template_name="rutapeque.html"), name="ruta"),
    path('punts/', TemplateView.as_view(template_name="punts.html"), name="punts"),
    path('punts/punt', TemplateView.as_view(template_name="puntspeque.html"), name="punt"),
    path('acces/', TemplateView.as_view(template_name="acces.html"), name="acces"),
    path('api/', include('api.urls')),
    path('apirutes/', include('Rutes.urls'))
]
