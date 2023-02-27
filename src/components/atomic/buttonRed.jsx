import React from "react";
import { Button } from "primereact/button";

const ButtonRed = ({ stateModal }) => {
  return (
    <div className="w-full flex align-items-center justify-content-center">
      <Button
        className="w-8 border-solid border-red-800 border-round-lg border-3 bg-red-700"
        onClick={() => stateModal(true, "rojo")}
      />
    </div>
  );
};

export default ButtonRed;
