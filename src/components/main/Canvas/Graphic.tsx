import React from "react";
import Canvas from "./Canvas.tsx";
import Instruments from "./Instruments.tsx";
import Settings from "./Setting.tsx";
import './Graphic.scss';

function Graphic() {
    return (
        <div className="graphic">
            <Instruments/>
            <Settings/>
            <Canvas/>
        </div>
    )
}

export default Graphic;