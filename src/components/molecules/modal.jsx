import React, { useState, useEffect } from 'react';
import { Dialog } from "primereact/dialog";


const Modal = (params) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    estado()
  }, [params])

  
  const estado = () => {
    setVisible(params.mostrar)
  }


  

  console.log("estamos", params.mostrar );
  return (
    <>

      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </>
  );
};

export default Modal;
