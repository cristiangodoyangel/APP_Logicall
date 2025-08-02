
# 📦 Backend - Sistema de Inventario y Salidas

Este proyecto es parte de una aplicación web para la gestión de inventario y control de salidas de productos desde bodega. Implementado en **Django** y **Django REST Framework**, expone una API REST lista para ser consumida por un frontend React.

---

## 🎯 Objetivos del Proyecto

- Centralizar la gestión de productos e inventario.
- Controlar las salidas desde bodega y sus responsables.
- Registrar detalles de cada salida, enlazando productos y cantidades.
- Exponer toda la funcionalidad mediante una API REST.
- Preparar la base para una interfaz moderna usando React.

---

## 📊 Tabla de Avances

| Módulo                   | Estado  | Descripción                                                                 |
|--------------------------|---------|-----------------------------------------------------------------------------|
| Configuración de entorno | ✅      | Proyecto Django con entorno virtual activo                                 |
| Modelo de datos          | ✅      | Modelos para Producto, Salida y DetalleSalida                              |
| Panel Admin              | ✅      | Visualización y gestión en Django Admin                                    |
| API de Productos         | ✅      | CRUD completo usando DRF                                                   |
| API de Salidas           | ✅      | Endpoints para crear y listar salidas de bodega                            |
| API de Detalles de salida| ✅      | Endpoints para agregar detalles por producto y salida                      |
| Pruebas desde DRF UI     | ✅      | Validación de endpoints funcionando correctamente desde navegador          |
| Documentación inicial    | ✅      | Archivo README con resumen del backend                                     |

---

## 🔗 Estructura de Endpoints

GET /api/productos/ # Lista productos
POST /api/productos/ # Crear producto
GET /api/salidas/ # Lista salidas
POST /api/salidas/ # Crear salida
GET /api/detalles/ # Lista detalles de salidas
POST /api/detalles/ # Crear detalle de salida


---

## 🧰 Tecnologías Usadas

- Python 3.13
- Django 4.x
- Django REST Framework
- SQLite (por ahora)

---





