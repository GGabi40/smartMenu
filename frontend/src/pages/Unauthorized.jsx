import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className='container'>
        <h1>🛑 Acceso denegado</h1>
        <p>No tenés permisos para acceder a esta sección.</p>
        <Link to='/login' className="btn-logout">Volver</Link>
    </div>
  )
}

export default Unauthorized