from django.contrib import admin
from .models import Producto

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('ITEM', 'NombreTecnico', 'Cantidad', 'Marca', 'Estado', 'Categoria')
    search_fields = ('NombreTecnico', 'Marca', 'Categoria')
    list_filter = ('Estado', 'Categoria')
