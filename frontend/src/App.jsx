import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import logo from './assets/img/logo.png';
import ProductosTable from './components/ProductosTable';
import AgregarProductoModal from './components/AgregarProductoModal';
import SalidaBodegaPage from './components/SalidaBodegaPage';

import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import $ from 'jquery';
import 'datatables.net-bs5';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [recargar, setRecargar] = useState(false);

  const handleProductoAgregado = () => {
    setRecargar(!recargar);
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <header className="d-flex justify-content-between align-items-center bg-terciario border-bottom px-4 py-3">
          <img src={logo} alt="Logo" />
          <button className="btn btn-primario">Ingresar</button>
        </header>

        <nav className="navbar navbar-expand-lg navbar-light bg-primario px-4">
          <div className="container-fluid">
            <span className="navbar-brand text-white fw-bold">Inventario360</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menuSuperior"
              aria-controls="menuSuperior"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menuSuperior">
              <ul className="navbar-nav ms-3">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/inventario">
                    <i className="bi bi-box-seam me-1"></i> Inventario
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/salida-bodega">
                    <i className="bi bi-truck me-1"></i> Salida de Bodega
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="app-container px-4 py-4 bg-terciario flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />

            <Route path="/inventario" element={
              <>
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
              </>
            } />

            <Route path="/salida-bodega" element={<SalidaBodegaPage />} />
          </Routes>
        </main>

        <footer className="text-center py-3 bg-primario text-white">
          © 2025 - i360 desarrollado por{' '}
          <a href="https://www.weblogica.cl" className="text-white fw-bold">
            www.weblogica.cl
          </a>
        </footer>

        <AgregarProductoModal onProductoAgregado={handleProductoAgregado} />
      </div>
    </BrowserRouter>
  );
}

export default App;
