import React, { useState } from "react";
import Modal from "../molecules/Modal";

const Organisms = () => {
  const [color, setColore] = useState("");

  //listen to the color of the button.
  const colorSelect = (colorFinal) => {
    setColore(colorFinal);
  };

  //change the color of the text according to the button.
  const selectText = () => {
    if (color === "rojo") {
      return <div className="text-red-900">Prueba Basica</div>;
    } else if (color === "azul") {
      return <div className="text-primary">Prueba Basica</div>;
    } else {
      return <div className="text-white">Prueba Basica</div>;
    }
  };

  return (
    <>
      {selectText()}
      <Modal colorSelect={colorSelect} />
    </>
  );
};

export default Organisms;
