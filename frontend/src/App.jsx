import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <header className="p-3 d-flex justify-content-between align-items-center bg-white border-bottom">
        <img src="/logo.png" alt="Logo" height="40" />
        <button className="btn btn-orange">Ingresar</button>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-orange">
        <div className="container-fluid">
          <span className="navbar-brand text-white fw-bold">Inventario360</span>
        </div>
      </nav>

      <div className="container mt-4">
        <h3 className="text-center">
          <i className="fa fa-warehouse me-2"></i> Inventario de Bodega
        </h3>

        {/* Aquí irá la tabla más adelante */}
        <div className="text-end mb-3">
          <button className="btn btn-secondary me-2">Subir Excel</button>
          <button className="btn btn-orange">Agregar Producto</button>
        </div>
      </div>

      <footer className="footer text-center p-3 mt-4">
        © 2025 - i360 desarrollado por <a href="https://www.weblogica.cl" className="text-white">www.weblogica.cl</a>
      </footer>
    </>
  );
}

export default App;
