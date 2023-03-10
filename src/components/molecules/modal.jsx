import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import ButtonBlue from "../atomic/buttonBlue";
import ButtonRed from "../atomic/buttonRed";

const Modal = ({ colorSelect }) => {
  const [visible, setVisible] = useState(false);
  const [colorModal, setColorModal] = useState();

  //saves the state of the modal and the color of the clicked button.
  const stateModal = (stateNow, colorNow) => {
    setVisible(stateNow);
    colorSelect(colorNow.toString());
    setColorModal(colorNow.toString());
  };

  return (
    <>
      <div className="boxButton flex flex-column sm:flex-row w-full mt-5">
        <ButtonBlue stateModal={stateModal} />
        <ButtonRed stateModal={stateModal} />
      </div>

      <Dialog
        header="Información"
        visible={visible}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          Señor usuario el color de la pantalla ha cambiado a {colorModal}
        </p>
      </Dialog>
    </>
  );
};

export default Modal;
