import React from "react";

const StatisticPanel = ({ orders }) => {
  const resumen = orders.reduce((acc, order) => {
    acc[order.estado] = (acc[order.estado] || 0) + 1;
    acc["Total"] = (acc["Total"] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
    <h1>Estadisticas</h1>
      <div className="estadisticas">
        {Object.entries(resumen)
        .sort(([a], [b]) => (a === 'Total' ? -1 : b === 'Total' ? 1 : 0))
        .map(([estado, cantidad]) => (
          <div key={estado} className="card-estadistica">
            <h4>{estado.split('')[0].toUpperCase() + estado.slice(1)}</h4>
            <p>{cantidad}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatisticPanel;
