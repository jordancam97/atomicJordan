import React, { useState } from "react";
import { Button } from "primereact/button";

const ButtonBlue = ({ stateModal }) => {
  return (
    <>
      <Button label="Info" severity="info" onClick={() => stateModal(true)} />
    </>
  );
};

export default ButtonBlue;
