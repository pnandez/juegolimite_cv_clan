import React from 'react'
import './Modal.css'
import ReactModal from 'react-modal';

const Modal = ({ isOpen, setModalIsOpen, setGroupNumber }) => {

  const handleSetGroupNumber = event => {
    event.preventDefault()
    setGroupNumber(event.target.value)
  }

  return (
    <div className="modal">
      <div className='ModalDiv'>
        <input type="text" onChange={handleSetGroupNumber} />
        < button onClick={() => { setModalIsOpen(false) }}> Aceptar</ button>
      </div>

    </div >)
}

export default Modal