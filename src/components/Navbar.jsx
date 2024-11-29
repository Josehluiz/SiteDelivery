import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="bg-warning p-3 shadow-md">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo e Nome do Site */}
        <div className="d-flex align-items-center">
          <Link to="/">
            <img 
              src="../public/images/logo.png"  // Caminho correto para a imagem do logo
              alt="Logo" 
              className="logo"  // Classe CSS para ajustar o tamanho da logo
            />
          </Link>
          <h1 className="text-white ms-3">Delivery App</h1>
        </div>
        
        {/* Link de informações do usuário posicionado à direita */}
        <div className="ms-auto">
          <Link to="/user" className="text-white d-flex align-items-center">
            <FaUserCircle size={100} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
