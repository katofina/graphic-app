import * as React from "react";
import Canvas from "./Canvas";
import Instruments from "./Instruments";
import Settings from "./Setting";
import "./Graphic.scss";

function Graphic() {
  return (
    <div className="graphic">
      <Instruments />
      <Settings />
      <Canvas />
    </div>
  );
}

export default Graphic;
