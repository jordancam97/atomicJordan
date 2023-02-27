import React, { useState } from "react";
import Modal from "../molecules/Modal";

const Organisms = ({ colorListen }) => {
  const [color, setColor] = useState("");

  //listen to the color of the button.
  const colorSelect = (colorFinal) => {
    setColor(colorFinal);
    colorListen(colorFinal);
  };

  //change the color of the text according to the button.
  const selectText = () => {
    if (color === "rojo") {
      return <div className="font-bold text-red-800">Prueba Básica</div>;
    } else if (color === "azul") {
      return <div className="font-bold text-blue-800">Prueba Básica</div>;
    } else {
      return <div className="font-bold text-white">Prueba Básica</div>;
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
