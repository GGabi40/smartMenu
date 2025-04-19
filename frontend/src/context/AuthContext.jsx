import React, { useContext } from "react";
import { useState, createContext } from "react";

// Context es util para cualquier componente que necesite
// información de autenticación.
// Se puede acceder a ella directamente sin
// necesidad de props drilling
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Manejo de estados del usuario
  const [user, setUser] = useState(null);
  
  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  }

  // modifican el localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
