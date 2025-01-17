from spiceMarkapp import views
from django.urls import path

urlpatterns = [
    path('routes/', views.getRoutes, name='getRoutes'),
    path('products/', views.getProducts, name='getProducts')
]
