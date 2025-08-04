import { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import 'datatables.net';
import * as bootstrap from 'bootstrap';
import AgregarProductoModal from './AgregarProductoModal';
import EditarProductoModal from './EditarProductoModal';

function ProductosTable({ recargar }) {
  const [productos, setProductos] = useState([]);
  const [productoEditar, setProductoEditar] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const recargarProductos = () => {
    axios.get('http://127.0.0.1:8000/api/productos/')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al cargar productos:', error));
  };

  useEffect(() => {
    recargarProductos();
  }, [recargar]);

  useEffect(() => {
    if (productos.length > 0) {
      const table = $('#tabla-productos').DataTable({
        language: {
          url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
        }
      });
  
      return () => {
        table.destroy(); // limpiar instancia previa
      };
    }
  }, [productos]);
  

  const abrirModalEdicion = (producto) => {
    setProductoEditar(producto);
    const modal = new bootstrap.Modal(document.getElementById('modalEditar'));
    modal.show();
  };

  const abrirModalEliminar = (producto) => {
    setProductoAEliminar(producto);
    const modal = new bootstrap.Modal(document.getElementById('modalEliminar'));
    modal.show();
  };

  const confirmarEliminar = async () => {
    if (!productoAEliminar) return;

    try {
      await axios.delete(`http://localhost:8000/api/productos/${productoAEliminar.ITEM}/`);
      recargarProductos();
      setProductoAEliminar(null);
      document.getElementById('cerrarModalEliminar').click();
    } catch (error) {
      console.error('Error al eliminar producto:', error.response || error.message);
      alert('Ocurrió un error al eliminar el producto.');
    }
  };

  return (
    <>
      <div className="table-responsive">
        <table id="tabla-productos" className="display table table-striped table-bordered align-middle">
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
                  <button
                    className="btn btn-sm btn-outline-warning me-2"
                    onClick={() => abrirModalEdicion(producto)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => abrirModalEliminar(producto)}
                  >
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

      <AgregarProductoModal onProductoGuardado={recargarProductos} />
      <EditarProductoModal productoEditar={productoEditar} onProductoGuardado={recargarProductos} />

      {/* Modal Confirmación Eliminar */}
      <div className="modal fade" id="modalEliminar" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-white" style={{ backgroundColor: 'var(--color-primario)' }}>
              <h5 className="modal-title">Confirmar Eliminación</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              ¿Está seguro que desea eliminar el producto{' '}
              <strong>{productoAEliminar?.NombreTecnico}</strong>?
            </div>
            <div className="modal-footer">
              <button id="cerrarModalEliminar" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button
                onClick={confirmarEliminar}
                className="btn text-white"
                style={{ backgroundColor: 'var(--color-primario)' }}
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductosTable;
