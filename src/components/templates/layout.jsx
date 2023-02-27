import React from "react";
import Organisms from "../organisms/organisms";

const Layout = ({ colorPages }) => {
  //listen to the color of the button.
  const colorListen = (colorFinal) => {
    colorPages(colorFinal);
  };

  return (
    <div className="boxInfo backgroundBlack border-solid border-blue-800 flex align-items-center justify-content-center flex-column">
      <Organisms colorListen={colorListen} />
    </div>
  );
};

export default Layout;
