import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to='/' className='logo'>SmartMenu</Link>
        <div className="links">
            <Link to='/' className='link'>Inicio</Link>
            <Link to='/crear' className='link'>Crear pedido</Link>
        </div>
    </nav>
  )
}

export default NavBar