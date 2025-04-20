import React from "react";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Order = ({ orders, setOrders, order }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `¿Estás segura de eliminar el pedido #${id}?`
    );

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/orders/${id}`);
        setOrders(orders.filter((order) => order.id !== id));
      } catch (err) {
        console.error("Error al eliminar pedido:", err);
      }
    }
  };

  const handleEdit = async (order) => {
    navigate(`/orders/${order.id}/edit`);
  };

  return (
    <tr key={order.id} className={`pedido ${order.estado.replace(/\s/g, "-")}`}>
      <td>#{order.id}</td>
      <td>{order.cliente}</td>
      <td className="mesa">{order.mesa}</td>
      <td>{order.detalle}</td>
      <td>{order.estado}</td>
      <td>{format(new Date(order.createdAt), "dd/MM/yyyy")}</td>
      <td className="hora">{format(new Date(order.createdAt), "HH:mm")}</td>
      <td>
        <button className="btn-delete" onClick={() => handleDelete(order.id)}>
          Eliminar
        </button>
        <button className="btn-edit" onClick={() => handleEdit(order)}>
          Editar
        </button>
      </td>
    </tr>
  );
};

export default Order;
