import React from 'react'
import './Modal.css'

const Modal = ({ setModalIsOpen, setGroupNumber }) => {

  const handleSetGroupNumber = event => {
    event.preventDefault()
    setGroupNumber(event.target.value)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <label>Introduce el número de tu grupo: </label>
          <input type="text" onChange={handleSetGroupNumber} />
          < button onClick={() => { setModalIsOpen(false); console.log() }}> Aceptar</ button>
        </div>
      </div>

    </div >)
}

export default Modal