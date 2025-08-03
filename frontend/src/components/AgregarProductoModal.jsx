import { useState } from 'react';
import axios from 'axios';

function AgregarProductoModal({ onProductoAgregado }) {
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
      if (key === "Proveedor" && formData[key] === "") continue; // Evita error si está vacío
      if (formData[key]) data.append(key, formData[key]);
    }
  
    try {
      await axios.post('http://localhost:8000/api/productos/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onProductoAgregado(); // Notifica al padre
      document.getElementById('cerrarModal').click(); // Cierra modal
    } catch (error) {
      console.error('Error al agregar producto:', error.response || error.message);
      alert("Ocurrió un error al guardar. Revisa consola.");
    }
  };


  return (
    <div className="modal fade" id="modalAgregar" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header bg-primario text-white">
            <h5 className="modal-title">Agregar Producto</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div className="modal-body row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre Técnico</label>
              <input name="NombreTecnico" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-3">
              <label className="form-label">Cantidad</label>
              <input name="Cantidad" type="number" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Unidad de Medida</label>
              <input name="UnidadMedida" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Medida</label>
              <input name="Medida" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Estado</label>
              <input name="Estado" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Categoría</label>
              <input name="Categoria" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Ubicación</label>
              <input name="Ubicacion" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Marca</label>
              <input name="Marca" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-12">
              <label className="form-label">Descripción</label>
              <textarea name="Descripcion" className="form-control" onChange={handleChange}></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label">Proveedor (ID)</label>
              <input name="Proveedor" type="number" className="form-control" onChange={handleChange} />
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
            <button type="submit" className="btn btn-primario">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarProductoModal;
