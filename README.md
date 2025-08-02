
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



## 🚧 Avances del Proyecto

| Módulo        | Tarea Realizada                                              | Estado     | Comentario |
|---------------|--------------------------------------------------------------|------------|------------|
| Backend (Django) | Configuración del proyecto y base de datos SQL Server      | ✅ Listo    | Uso de ODBC Driver 17 |
| Backend (Django) | Creación de modelos: Producto, SalidaBodega, DetalleSalida | ✅ Listo    | Incluye campos clave del inventario |
| Backend (API) | API REST con Django REST Framework para productos y salidas  | ✅ Listo    | Listado y creación disponibles |
| Backend | Configuración de CORS para conexión con frontend                    | ✅ Listo    | Uso de `django-cors-headers` |
| Frontend (React) | Inicialización con Vite + Bootstrap                         | ✅ Listo    | Compatible con SPA |
| Frontend (React) | Creación de vista de tabla de productos                     | ✅ Listo    | Diseño inspirado en inventario original |
| Frontend | Estilos adaptados con Bootstrap y variables propias (`.btn-orange`) | ✅ Listo    | Interfaz consistente con sistema actual |
| Frontend | Integración parcial con API (simulación de datos por ahora)        | 🔜 En curso | Pendiente uso de `axios` |
| General | Estructura de carpetas separadas: `frontend/` y `backend/`          | ✅ Listo    | Organización clara del proyecto |

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






