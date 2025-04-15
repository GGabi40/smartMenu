import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container home'>
      <h1>Bienvenido a SmartMenu 🍽️</h1>
      <p>Gestioná los pedidos del restaurante de forma rápida y eficiente.</p>

      <div className="home__actions">
        <Link to='/orders' className='home__btn'>📋 Ver Pedidos</Link>
        <Link to='/new-order' className='home__btn'>➕ Nuevo Pedido</Link>
      </div>
    </div>
  )
}

export default Home