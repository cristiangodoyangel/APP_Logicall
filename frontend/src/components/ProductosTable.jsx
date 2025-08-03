import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductosTable({ recargar }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/productos/')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al cargar productos:', error));
  }, [recargar]);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Nombre Técnico</th>
            <th>Cantidad</th>
            <th>Medida</th>
            <th>Ubicación</th>
            <th>Estado</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.ITEM}>
              <td>{producto.NombreTecnico}</td>
              <td>{producto.Cantidad}</td>
              <td>{producto.Medida} {producto.UnidadMedida}</td>
              <td>{producto.Ubicacion}</td>
              <td>{producto.Estado}</td>
              <td>{producto.Categoria}</td>
              <td>
                {producto.Imagen ? (
                  <img src={producto.Imagen} alt="Imagen Producto" height="40" />
                ) : (
                  <span className="text-muted">Sin imagen</span>
                )}
              </td>
              <td className="text-center">
                <button className="btn btn-sm btn-outline-warning me-2">
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
          {productos.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center text-muted">No hay productos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductosTable;
 