import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { logout, rol } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
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
      {rol && (
        <div className="user-info">
          <span>Rol: {rol}</span>
          <button onClick={handleLogout} className="btn-logout">
            Cerrar sesión
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
