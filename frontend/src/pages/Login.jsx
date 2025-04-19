import "../styles/app.scss";
import React, { useContext, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login", form);

      login(res.data.user.rol);

      navigate("/orders");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Error al conectar con el servidor.");
      }
    }
  };

  return (
    <div className="form-container container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ borderColor: error && error.includes('Usuario') ? 'red' : '' }}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          style={{ borderColor: error && error.includes('Contraseña') ? 'red' : '' }}
          required
        />

        <button type="submit">Ingresar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
