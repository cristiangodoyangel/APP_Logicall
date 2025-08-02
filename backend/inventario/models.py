from django.db import models

class Producto(models.Model):
    ITEM = models.AutoField(primary_key=True)

    Cantidad = models.IntegerField(null=True, blank=True)

    NombreTecnico = models.CharField(max_length=255)

    Medida = models.CharField(max_length=50, null=True, blank=True)
    UnidadMedida = models.CharField(max_length=50, null=True, blank=True)

    Marca = models.CharField(max_length=255, null=True, blank=True)
    Descripcion = models.TextField(null=True, blank=True)

    Imagen = models.CharField(max_length=255, null=True, blank=True)

    Proveedor = models.IntegerField(null=True, blank=True)

    Ubicacion = models.CharField(max_length=255, null=True, blank=True)
    Estado = models.CharField(max_length=50, null=True, blank=True)
    Categoria = models.CharField(max_length=255, null=True, blank=True)

    # Campo no mapeado, solo útil en lógica de vista o serializers
    @property
    def NombreProveedor(self):
        return None  # o lógica dummy si lo deseas

    def __str__(self):
        return self.NombreTecnico
