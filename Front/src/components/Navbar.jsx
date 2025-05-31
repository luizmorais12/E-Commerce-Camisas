import React from "react";
import { FaUser, FaHeart, FaShoppingCart, FaGlobe, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import logo from "../img/logo.png"; // Deixado aqui caso queira reativar no futuro

function Navbar() {
  return (
    <nav className="navbar bg-light border-bottom">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4 py-2">

        {/* Logo como Link para Home (comentado temporariamente) */}
        {/* 
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: "40px", cursor: "pointer" }} />
        </Link> 
        */}

        {/* Campo de busca */}
        <div className="d-flex align-items-center flex-grow-1 mx-4">
          <div className="input-group w-100">
            <span className="input-group-text bg-white border-end-0">
              <FaSearch className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="O que você procura?"
              aria-label="Buscar"
            />
          </div>
        </div>

        {/* Ações à direita */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <FaGlobe className="me-1" />
            International Orders
          </button>

          <div className="dropdown">
            <button
              className="btn btn-link text-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaUser size={18} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
              <li><Link className="dropdown-item" to="/cadastro">Cadastre-se</Link></li>
              <li><Link className="dropdown-item" to="/pedidos">Meus Pedidos</Link></li>
              <li><Link className="dropdown-item" to="/ajuda">Ajuda</Link></li>
            </ul>
          </div>

          <button className="btn btn-link text-dark">
            <FaHeart size={18} />
          </button>

          <button className="btn btn-link text-dark">
            <FaShoppingCart size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
