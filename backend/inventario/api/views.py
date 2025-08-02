from rest_framework import viewsets
from ..models import Producto, SalidaBodega, DetalleSalida
from .serializers import ProductoSerializer, SalidaBodegaSerializer, DetalleSalidaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class SalidaBodegaViewSet(viewsets.ModelViewSet):
    queryset = SalidaBodega.objects.all()
    serializer_class = SalidaBodegaSerializer

class DetalleSalidaViewSet(viewsets.ModelViewSet):
    queryset = DetalleSalida.objects.all()
    serializer_class = DetalleSalidaSerializer
