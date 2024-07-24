import React, { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import canvas from "../../../store/canvasSlice.ts";
import option from "../../../store/optionSlice.ts";
import Brush from "./tools/Brush.ts";
import Square from "./tools/Square.ts";
import Circle from "./tools/Circle.ts";
import Rubber from "./tools/Rubber.ts";
import Line from "./tools/Line.ts";
import {isLoggedIn} from "../../../storage/session.ts";
import { Store } from "../../../store/Store.ts";

const Instruments = () => {
    const dispatch = useDispatch();
    const fabric = useSelector((store: Store) => store.canvas);
    const tools = useSelector((store: Store) => store.option);

    function changeColor(e: SyntheticEvent) {
        const color = (e.target as HTMLInputElement).value;
        dispatch(option.actions.setStrokeColor(color));
    };

    function back() {
        let context = (fabric.canvas as HTMLCanvasElement).getContext('2d');
        if (fabric!.allDo.length > 0) {
            let lastElUrl = fabric!.allDo.at(-1);
            dispatch(canvas.actions.pushCancelDo((fabric.canvas as HTMLCanvasElement).toDataURL()));
            let img = new Image();
            if(lastElUrl) img.src = lastElUrl;
            img.onload = () => {
                context!.clearRect(0, 0, (fabric.canvas as HTMLCanvasElement).width, (fabric.canvas as HTMLCanvasElement).height);
                context!.drawImage(img, 0, 0, (fabric.canvas as HTMLCanvasElement).width, (fabric.canvas as HTMLCanvasElement).height);
            };
        } else {
            context!.clearRect(0, 0, (fabric.canvas as HTMLCanvasElement).width, (fabric.canvas as HTMLCanvasElement).height);
        }
    };

    function forward() {
        let context = (fabric.canvas as HTMLCanvasElement).getContext('2d');
        if (fabric.cancelDo.length > 0) {
            let lastElUrl = fabric.cancelDo.at(-1);
            dispatch(canvas.actions.forwardDo((fabric.canvas as HTMLCanvasElement).toDataURL()));
            let img = new Image();
            if(lastElUrl) img.src = lastElUrl;
            img.onload = () => {
                context!.clearRect(0, 0, (fabric.canvas as HTMLCanvasElement).width, (fabric.canvas as HTMLCanvasElement).height);
                context!.drawImage(img, 0, 0, (fabric.canvas as HTMLCanvasElement).width, (fabric.canvas as HTMLCanvasElement).height);
            };
        };
    };

    function save() {
        if(!isLoggedIn()) {
            alert('You should sign in or sign up for save the image');
        } else {
            const same = fabric.save.some((el) => el === (fabric.canvas as HTMLCanvasElement).toDataURL());
            if (!same) dispatch(canvas.actions.pushSave((fabric.canvas as HTMLCanvasElement).toDataURL('image/png')));
        }
    }

    return (
        <div className="panel-instrument">
        <button
            className="instrument-button brush"
            onClick={() => dispatch(option.actions.setOption(new Brush(fabric.canvas, tools)))}
        ></button>
        <button
            className="instrument-button square"
            onClick={() => dispatch(option.actions.setOption(new Square(fabric.canvas, tools)))}
        ></button>
        <button 
            className="instrument-button circle" 
            onClick={() => dispatch(option.actions.setOption(new Circle(fabric.canvas, tools)))}>
        </button>
        <button 
            className="instrument-button rubber"
            onClick={() => dispatch(option.actions.setOption(new Rubber(fabric.canvas, tools)))}>
        </button>
        <button 
            className="instrument-button line"
            onClick={() => dispatch(option.actions.setOption(new Line(fabric.canvas, tools)))}>
        </button>
        <input type="color" style={{ marginLeft: 10 }}  onChange={(e) => changeColor(e)}/>
        <button className="instrument-button back" onClick={back}></button>
        <button className="instrument-button forward" onClick={forward}></button>
        <button className="instrument-button save" onClick={save}></button>
    </div>
    );
};

export default Instruments;
