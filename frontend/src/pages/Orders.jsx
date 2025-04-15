import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/api/orders')
        .then(res => setOrders(res.data))
        .catch(err => console.error('Error al obtener pedidos: ', err));
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(`¿Estás segura de eliminar el pedido #${id}?`);

        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/orders/${id}`);
                setOrders(orders.filter(order => order.id !== id));
            } catch (err) {
                console.error('Error al eliminar pedido:', err);
            }
        }
    }

    const handleEdit = async (order) => {
        navigate(`/orders/${order.id}/edit`);
    }

  return (
    <div className='container orders'>
        <h1>Lista de Pedidos</h1>
        <table className='orders-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Mesa</th>
                    <th>Detalle</th>
                    <th>Estado</th>
                    <th>Dia</th>
                    <th>Hora</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* viene de BBDD */}
                {
                    orders.map(order => (
                        <tr 
                        key={order.id}
                        className={order.estado === 'entregado' ? "done" : ""}>
                            <td>{order.id}</td>
                            <td>{order.cliente}</td>
                            <td>{order.mesa}</td>
                            <td>{order.detalle}</td>
                            <td>{order.estado}</td>
                            <td>{format(new Date(order.createdAt), 'dd/MM/yyyy')}</td>
                            <td className='hora'>{format(new Date(order.createdAt), 'HH:mm')}</td>
                            <td>
                                <button className='btn-delete' onClick={() => handleDelete(order.id)}>Eliminar</button>
                                <button className='btn-edit' onClick={() => handleEdit(order)}>Editar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Orders