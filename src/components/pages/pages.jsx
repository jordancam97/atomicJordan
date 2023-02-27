import React, { useState } from "react";
import Layout from "../templates/Layout";

const Pages = () => {
  const [first, setfirst] = useState("");

  //listen to the color of the button.
  const colorPages = (colorFinal) => {
    setfirst(colorFinal);
    bgState(colorFinal);
  };

  //change the background color depending on the button.
  const bgState = (bg) => {
    if (bg === "rojo") {
      setfirst("bg-red-700");
    } else if (bg === "azul") {
      setfirst("bg-blue-700");
    } else {
      setfirst("bg-gray-900");
    }
  };

  return (
    <div
      className={`h-screen flex align-items-center justify-content-center flex-column ${first}`}
    >
      <Layout colorPages={colorPages} />
    </div>
  );
};

export default Pages;
