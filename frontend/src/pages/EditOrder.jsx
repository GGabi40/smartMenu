import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Modal from "../components/Modal";
import "../styles/app.scss";

const EditOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    cliente: "",
    mesa: "",
    detalle: "",
    estado: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFields = {};
    for (const key in order) {
      if (order[key] !== '') updatedFields[key] = order[key];
    }

    axios
      .put(`http://localhost:3000/api/orders/${id}`, updatedFields)
      .then(() => {
        setShowModal(true);
      })
      .catch((err) => console.error("Error al editar pedido: ", err));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/orders");
};

  useEffect(() => {
    axios
      .get(`http://localhost:3000/orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.error(`Error al cargar pedido: ${err}`));
  }, [id]);

  return (
    <div className="form-container container">
      {showModal && (
        <Modal
            message="¡Pedido actualizado con éxito! 🎉"
            onClose={handleCloseModal}
        />
      )}
      <h2>Editar Pedido #{id}</h2>
      <Link to='/orders' className="btn-volver">Volver a Lista de Pedidos:</Link>
      <form onSubmit={handleSubmit}>
        <label>Cliente</label>
        <input
          type="text"
          name="cliente"
          placeholder="Nombre del cliente"
          value={order.cliente}
          onChange={handleChange}
        />

        <label>Mesa</label>
        <input
          type="number"
          name="mesa"
          placeholder="Número de mesa"
          value={order.mesa}
          onChange={handleChange}
        />

        <label>Detalle</label>
        <textarea
          name="detalle"
          placeholder="Detalle del pedido"
          value={order.detalle}
          onChange={handleChange}
        ></textarea>

        <label>Estado</label>
        <select name="estado" onChange={handleChange} value={order.estado}>
          <option value="pendiente">Pendiente</option>
          <option value="en preparación">En preparación</option>
          <option value="entregado">Entregado</option>
        </select>

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditOrder;
