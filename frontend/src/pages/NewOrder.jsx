import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Modal from '../components/Modal';
import '../styles/app.scss';

const NewOrder = () => {
    const navigate = useNavigate();
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
            <input 
                type="text" 
                name="cliente"
                placeholder='Nombre del cliente'
                value={order.cliente}
                onChange={handleChange}
                required
            />

            <label>Mesa</label>
            <input 
                type="number" 
                name="mesa" 
                placeholder='Número de mesa'
                value={order.mesa}
                onChange={handleChange}
                required
            />

            <label>Detalle</label>
            <textarea 
                name="detalle" 
                placeholder='Detalle del pedido'
                value={order.detalle}
                onChange={handleChange}
                required
            ></textarea>

            <button type="submit">Crear Pedido</button>
        </form>

    </div>
  )
}

export default NewOrder