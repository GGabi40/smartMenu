import '../styles/app.scss';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [selectedRol, setSelectedRol] = useState('mozo');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        login(selectedRol);
        navigate('/orders');
    }

  return (
    <div className='form-container container'>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <label>Seleccioná tu rol:</label>
            <select
                value={selectedRol}
                onChange={(e) => setSelectedRol(e.target.value)}
            >
                <option value="mozo">Mozo</option>
                <option value="cocina">Cocina</option>
            </select>

            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login