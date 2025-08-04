import { useEffect, useState } from 'react';
import axios from 'axios';
import AgregarProductoModal from './AgregarProductoModal';
import EditarProductoModal from './EditarProductoModal'; // nuevo
import * as bootstrap from 'bootstrap';


function ProductosTable({ recargar }) {
  const [productos, setProductos] = useState([]);
  const [productoEditar, setProductoEditar] = useState(null);

  const recargarProductos = () => {
    axios.get('http://127.0.0.1:8000/api/productos/')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al cargar productos:', error));
  };

  useEffect(() => {
    recargarProductos();
  }, [recargar]);

  const abrirModalEdicion = (producto) => {
    setProductoEditar(producto);
    const modal = new bootstrap.Modal(document.getElementById('modalEditar'));
    modal.show();
  };

  return (
    <div className="table-responsive">
      <table className="table tabla-productos table-striped table-bordered align-middle">
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
                <button className="btn btn-sm btn-outline-warning me-2" onClick={() => abrirModalEdicion(producto)}>
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

      <AgregarProductoModal onProductoGuardado={recargarProductos} />
      <EditarProductoModal productoEditar={productoEditar} onProductoGuardado={recargarProductos} />
    </div>
  );
}

export default ProductosTable;
