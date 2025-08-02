import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ProductosTable from './components/ProductosTable';

function App() {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center bg-white border-bottom px-4 py-3">
        <img src="/logo.png" alt="Logo" />
        <button className="btn btn-orange">Ingresar</button>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-orange">
        <div className="container-fluid">
          <span className="navbar-brand text-white fw-bold">Inventario360</span>
        </div>
      </nav>

      <div className="container mt-4">
        <h3 className="text-center mb-4">
          <i className="bi bi-box-seam me-2"></i> Inventario de Bodega
        </h3>

        <div className="text-end mb-3">
          <button className="btn btn-secondary me-2">
            <i className="bi bi-upload me-1"></i> Subir Excel
          </button>
          <button className="btn btn-orange">
            <i className="bi bi-plus-lg me-1"></i> Agregar Producto
          </button>
        </div>

        <ProductosTable />
      </div>

      <footer className="footer text-center p-3 mt-4">
        © 2025 - i360 desarrollado por{' '}
        <a href="https://www.weblogica.cl" className="text-white fw-bold">
          www.weblogica.cl
        </a>
      </footer>
    </>
  );
}

export default App;
