import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import ButtonBlue from "../atomic/ButtonBlue";
import ButtonRed from "../atomic/ButtonRed";

const Modal = () => {
  const [visible, setVisible] = useState(false);

  const stateModal = (stateNow) => {
    setVisible(stateNow);
  };

  return (
    <>
      <ButtonBlue stateModal={stateModal} />
      <ButtonRed stateModal={stateModal} />
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
