import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import logo from './assets/img/logo.png';
import ProductosTable from './components/ProductosTable';
import AgregarProductoModal from './components/AgregarProductoModal';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import $ from 'jquery';
import 'datatables.net-bs5';


import { useState } from 'react';

function App() {
  const [recargar, setRecargar] = useState(false);

  const handleProductoAgregado = () => {
    setRecargar(!recargar);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="d-flex justify-content-between align-items-center bg-terciario border-bottom px-4 py-3">
        <img src={logo} alt="Logo" />
        <button className="btn btn-primario">Ingresar</button>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-primario px-4">
        <span className="navbar-brand text-white fw-bold">Inventario360</span>
      </nav>

      <main className="app-container px-4 py-4 bg-terciario flex-grow-1">
        <h3 className="mb-4 text-primario">
          <i className="bi bi-box-seam me-2"></i> Inventario de Bodega
        </h3>

        <div className="text-end mb-3">
          <button className="btn btn-secondary me-2">
            <i className="bi bi-upload me-1"></i> Subir Excel
          </button>
          <button
            className="btn btn-primario"
            data-bs-toggle="modal"
            data-bs-target="#modalAgregar"
          >
            <i className="bi bi-plus-lg me-1"></i> Agregar Producto
          </button>
        </div>

        <ProductosTable recargar={recargar} />
      </main>

      <footer className="text-center py-3 bg-primario text-white">
        © 2025 - i360 desarrollado por{' '}
        <a href="https://www.weblogica.cl" className="text-white fw-bold">
          www.weblogica.cl
        </a>
      </footer>

      {/* Modal para agregar producto */}
      <AgregarProductoModal onProductoAgregado={handleProductoAgregado} />
    </div>
  );
}

export default App;
