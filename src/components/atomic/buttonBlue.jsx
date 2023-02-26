import React, { useState } from 'react'
import { Button } from 'primereact/button';
import Modal from '../molecules/Modal';


const ButtonBlue = () => {
  const [mo, setMo] = useState(false)
  const datos = () => {
    setMo(true)
  };
  console.log("que,", mo);

  return (
    <>
    <Button label="Info" severity="info" onClick={() => datos()} />
    <Modal mostrar={mo}/>
    </>
  )
}

export default ButtonBlue