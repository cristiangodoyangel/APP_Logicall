from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet, SalidaBodegaViewSet, DetalleSalidaViewSet

from django.urls import path, include

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)
router.register(r'salidas', SalidaBodegaViewSet)
router.register(r'detalles', DetalleSalidaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
