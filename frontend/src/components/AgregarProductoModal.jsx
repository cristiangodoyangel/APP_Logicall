import { useState, useEffect } from 'react';
import axios from 'axios';

function AgregarProductoModal({ productoEditar, onProductoGuardado }) {
  const [formData, setFormData] = useState({
    NombreTecnico: '',
    Cantidad: '',
    Medida: '',
    UnidadMedida: '',
    Marca: '',
    Descripcion: '',
    Imagen: null,
    Proveedor: '',
    Ubicacion: '',
    Estado: '',
    Categoria: '',
  });

  useEffect(() => {
    if (productoEditar) {
      const datos = { ...productoEditar };
      delete datos.Imagen; // Para evitar problemas al mostrar imagen previa
      setFormData(datos);
    } else {
      setFormData({
        NombreTecnico: '',
        Cantidad: '',
        Medida: '',
        UnidadMedida: '',
        Marca: '',
        Descripcion: '',
        Imagen: null,
        Proveedor: '',
        Ubicacion: '',
        Estado: '',
        Categoria: '',
      });
    }
  }, [productoEditar]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'Imagen') {
      setFormData({ ...formData, Imagen: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === "Proveedor" && formData[key] === "") continue;
      if (formData[key]) data.append(key, formData[key]);
    }

    try {
      if (productoEditar && productoEditar.ITEM) {
        await axios.put(`http://localhost:8000/api/productos/${productoEditar.ITEM}/`, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post('http://localhost:8000/api/productos/', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      onProductoGuardado(); // Actualiza la tabla
      document.getElementById('cerrarModal').click(); // Cierra el modal
    } catch (error) {
      console.error('Error al guardar producto:', error.response || error.message);
      alert("Error al guardar. Revisa consola.");
    }
  };

  return (
    <div className="modal fade" id="modalAgregar" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header bg-primario text-white">
            <h5 className="modal-title">
              {productoEditar ? 'Editar Producto' : 'Agregar Producto'}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div className="modal-body row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre Técnico</label>
              <input name="NombreTecnico" className="form-control" value={formData.NombreTecnico} onChange={handleChange} required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Cantidad</label>
              <input name="Cantidad" type="number" className="form-control" value={formData.Cantidad} onChange={handleChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Unidad de Medida</label>
              <input name="UnidadMedida" className="form-control" value={formData.UnidadMedida} onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Medida</label>
              <input name="Medida" className="form-control" value={formData.Medida} onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Estado</label>
              <input name="Estado" className="form-control" value={formData.Estado} onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Categoría</label>
              <input name="Categoria" className="form-control" value={formData.Categoria} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Ubicación</label>
              <input name="Ubicacion" className="form-control" value={formData.Ubicacion} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Marca</label>
              <input name="Marca" className="form-control" value={formData.Marca} onChange={handleChange} />
            </div>
            <div className="col-12">
              <label className="form-label">Descripción</label>
              <textarea name="Descripcion" className="form-control" value={formData.Descripcion} onChange={handleChange}></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label">Proveedor (ID)</label>
              <input name="Proveedor" type="number" className="form-control" value={formData.Proveedor} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Imagen</label>
              <input name="Imagen" type="file" className="form-control" accept="image/*" onChange={handleChange} />
            </div>
          </div>
          <div className="modal-footer">
            <button id="cerrarModal" type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primario">
              {productoEditar ? 'Actualizar' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarProductoModal;
