import React, { useEffect } from 'react'
import './Modal.css'

const Modal = ({ handleAcceptGroup, setGroupNumber, groupError }) => {

  const handleSetGroupNumber = event => {
    event.preventDefault()
    setGroupNumber(event.target.value)
  }

  useEffect(() => {
    console.log("SDAFSDJKLGFSDFJLGJKDL")
  }, [groupError]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <label>Introduce el número de tu grupo: </label>
          <input type="text" onChange={handleSetGroupNumber} />
          < button onClick={handleAcceptGroup}> Aceptar</ button>
          {groupError ? <p className='error-text'>El grupo no existe</p> : <></>}
        </div>

      </div>

    </div >)
}

export default Modal