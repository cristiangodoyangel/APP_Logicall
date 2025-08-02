from rest_framework import serializers
from ..models import Producto, SalidaBodega, DetalleSalida

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class SalidaBodegaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalidaBodega
        fields = '__all__'

class DetalleSalidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleSalida
        fields = '__all__'
