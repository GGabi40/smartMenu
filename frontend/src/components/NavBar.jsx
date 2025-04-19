import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    logout();
  };

  return (
    <nav>
      <Link to="/" className="logo">
        SmartMenu
      </Link>
      <div className="links">
        <Link to="/" className="link">
          Inicio
        </Link>
        <Link to="/new-order" className="link">
          Crear pedido
        </Link>
        <Link to="/orders" className="link">
          Lista de pedidos
        </Link>
      </div>
      {user && (
        <div className="user-info">
          <span>Rol: {user}</span>
          <button onClick={handleLogout} className="btn-logout">
            Cerrar sesión
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
