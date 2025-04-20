import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Modal from '../components/Modal';
import '../styles/app.scss';

const NewOrder = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [order, setOrder] = useState({
        cliente: "",
        mesa: "",
        detalle: "",
        estado: "pendiente"
    });

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        navigate("/orders");
    }

    const handleChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        });

        setErrors({});
    };

    const validate = () => {
        const newErrors = {};

        if(!order.cliente || order.cliente.trim().length < 3) {
            newErrors.cliente = 'El nombre del cliente debe tener al menos 2 letras.'
        }

        if(!order.mesa || parseInt(order.mesa) <= 0) {
            newErrors.mesa = 'El número de mesa debe ser mayor que cero.';
        }

        if(!order.detalle || order.detalle.trim().length < 5) {
            newErrors.detalle = 'El detalle debe tener al menos 5 caracteres.';
        };

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica el formulario
        const validation = validate();
        if(Object.keys(validation).length > 0) {
            setErrors(validation);
            return;
        }

        axios.post('http://localhost:3000/api/orders', order)
        .then(() => {
            setShowModal(true);
        })
        .catch((err) => console.error(`Error al crear pedido: ${err}`));
    };

  return (
    <div className='form-container container'>
        {showModal && (
            <Modal 
                message="¡Pedido creado con éxito!"
                onClose={handleCloseModal}
            />
        )}
        <h2>Nuevo Pedido</h2>
        <form onSubmit={handleSubmit}>
            <label>Cliente</label>
            <input className={errors.cliente && 'danger'}
                type="text" 
                name="cliente"
                placeholder='Nombre del cliente'
                value={order.cliente}
                onChange={handleChange}
                required
            />
            {
                errors.cliente && <p className='error'>{errors.cliente}</p>
            }

            <label>Mesa</label>
            <input className={errors.mesa && 'danger'}
                type="number" 
                name="mesa" 
                placeholder='Número de mesa'
                value={order.mesa}
                onChange={handleChange}
                required
            />
            {
                errors.mesa && <p className='error'>{errors.mesa}</p>
            }

            <label>Detalle</label>
            <textarea className={errors.detalle && 'danger'}
                name="detalle" 
                placeholder='Detalle del pedido'
                value={order.detalle}
                onChange={handleChange}
                required
            ></textarea>
            {
                errors.detalle && <p className='error'>{errors.detalle}</p>
            }

            <button type="submit">Crear Pedido</button>
        </form>

    </div>
  )
}

export default NewOrder