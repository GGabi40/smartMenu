import React from 'react'
import '../styles/app.scss'

const Modal = ({ message, onClose }) => {
  return (
    <div className='modal-backdrop'>
        <div className="modal">
            <p>{message}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
  )
}

export default Modal