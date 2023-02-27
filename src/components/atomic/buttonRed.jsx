import React from "react";
import { Button } from "primereact/button";

const ButtonRed = ({ stateModal }) => {
  return (
    <Button label="Danger" severity="danger" onClick={() => stateModal(true, "rojo")} />
  );
};

export default ButtonRed;
