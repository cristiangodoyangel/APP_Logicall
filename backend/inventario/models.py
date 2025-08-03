from django.db import models
from django.core.validators import FileExtensionValidator
import os
def ruta_imagen_producto(instance, filename):
    return os.path.join('productos', filename)

class Producto(models.Model):
    ITEM = models.AutoField(primary_key=True)
    Cantidad = models.IntegerField(null=True, blank=True)
    NombreTecnico = models.CharField(max_length=255)
    Medida = models.CharField(max_length=50, null=True, blank=True)
    UnidadMedida = models.CharField(max_length=50, null=True, blank=True)
    Marca = models.CharField(max_length=255, null=True, blank=True)
    Descripcion = models.TextField(null=True, blank=True)

    Imagen = models.ImageField(
    upload_to='imagenes_productos/',
    null=True,
    blank=True,
    validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'jfif'])]
)

    Proveedor = models.IntegerField(null=True, blank=True)
    Ubicacion = models.CharField(max_length=255, null=True, blank=True)
    Estado = models.CharField(max_length=50, null=True, blank=True)
    Categoria = models.CharField(max_length=255, null=True, blank=True)

    @property
    def NombreProveedor(self):
        return None

    def __str__(self):
        return self.NombreTecnico

class SalidaBodega(models.Model):
    ID = models.AutoField(primary_key=True)
    Fecha = models.DateTimeField(auto_now_add=True)
    Solicitante = models.CharField(max_length=255)
    ResponsableEntrega = models.CharField(max_length=255)
    Proyecto = models.CharField(max_length=255)

    def __str__(self):
        return f'Salida {self.ID} - {self.Solicitante}'


class DetalleSalida(models.Model):
    salida = models.ForeignKey(SalidaBodega, on_delete=models.CASCADE, related_name='detalles')
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()

    def __str__(self):
        return f'{self.producto.NombreTecnico} x {self.cantidad}'
