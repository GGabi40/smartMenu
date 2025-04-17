import React from "react";
import { useState, useEffect, createContext } from "react";

// Context es util para cualquier componente que necesite
// información de autenticación.
// Se puede acceder a ella directamente sin
// necesidad de props drilling
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Manejo de estados del rol de usuario
  const [rol, setRol] = useState(null);

  useEffect(() => {
    const storedRol = localStorage.getItem('rol');
    
    // recupera info de LocalStorage
    if(storedRol) {
        setRol(storedRol);
    }
  }, []);

  
  const login = (newRol) => {
    setRol(newRol);
    localStorage.setItem('rol', newRol);
  }

  // modifican el localStorage
  const logout = () => {
    setRol(null);
    localStorage.removeItem('rol');
  }

  return (
    <AuthContext.Provider value={{ rol, login,logout }}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
