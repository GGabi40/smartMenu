import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    logout();
  };

  return (
    <nav>
      <Link to="/" className="logo">
        SmartMenu
      </Link>
      {user && (
        <>
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
          <div className="user-info">
            <span>Rol: {user}</span>
            <button onClick={handleLogout} className="btn-logout">
              Cerrar sesión
            </button>
          </div>
        </>
      )}
      <button onClick={toggleTheme} className="btn-mode">
        {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
      </button>
    </nav>
  );
};

export default NavBar;
