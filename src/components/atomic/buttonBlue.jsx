import React, { useState } from "react";
import { Button } from "primereact/button";

const ButtonBlue = ({ stateModal }) => {
  return (
    <div className="w-full flex align-items-center justify-content-center">
      <Button
        className="w-8 border-solid border-blue-800 border-round-lg border-3 bg-blue-700"
        onClick={() => stateModal(true, "azul")}
      />
    </div>
  );
};

export default ButtonBlue;
