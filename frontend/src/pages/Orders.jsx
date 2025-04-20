import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Order from "../components/Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error al obtener pedidos: ", err));
  }, []);

  /* Filtrado */
  const [filterState, setFilterState] = useState("todos");

  /* Organizar por CreatedAt */
  const [descendentOrder, setDescendentOrder] = useState(true);
  const ordersSorted = orders
    .filter((order) => {
      return filterState === "todos" || order.estado === filterState;
    })
    .slice()
    .sort((a, b) =>
      descendentOrder
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  return (
    <div className="container orders">
      <h1>Lista de Pedidos</h1>
      <div className="btn-actions">
        <Link to="/new-order" className="btn-nuevo">
          + Nuevo Pedido
        </Link>

        <button
          className="btn-toggle-order"
          onClick={() => setDescendentOrder(!descendentOrder)}
        >
          Mostrando:{" "}
          {descendentOrder ? "Más recientes primero" : "Más antiguos primero"}
        </button>

        <select
          value={filterState}
          onChange={(e) => setFilterState(e.target.value)}
          className="select-estado"
        >
          <option value="todos">Todos</option>
          <option value="pendiente">Pendiente</option>
          <option value="en preparación">En preparación</option>
          <option value="entregado">Entregado</option>
        </select>
      </div>

      <table className="orders-table">
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
          {/* Se organiza */}
          {ordersSorted.map((order) => (
            <Order orders={ orders } setOrders={setOrders} order={ order } />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
