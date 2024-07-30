import { MutableRefObject } from "react";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import canvas from "../../../store/canvasSlice";
import option, { Option } from "../../../store/optionSlice";
import { Store } from "../../../store/Store";
import Brush from "./tools/Brush";
import Circle from "./tools/Circle";
import Line from "./tools/Line";
import Rubber from "./tools/Rubber";
import Square from "./tools/Square";

function constr(ref: HTMLCanvasElement, tools: Option) {
  let constr:
    | typeof Brush
    | typeof Circle
    | typeof Line
    | typeof Rubber
    | typeof Square;

  switch (tools.constructor) {
    case "Brush":
      constr = Brush;
      break;
    case "Circle":
      constr = Circle;
      break;
    case "Line":
      constr = Line;
      break;
    case "Rubber":
      constr = Rubber;
      break;
    case "Square":
      constr = Square;
      break;
    default:
      constr = Brush;
  }

  return new constr(ref, tools);
}

function Canvas() {
  const dispatch = useDispatch();
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const tools = useSelector((store: Store) => store.option);

  function handlerSave() {
    dispatch(canvas.actions.pushAllDo(canvasRef!.current!.toDataURL()));
  }

  useEffect(() => {
    dispatch(canvas.actions.setCanvas(canvasRef.current!));
    console.log(constr);
    dispatch(option.actions.setOption(constr(canvasRef.current, tools)));
  }, [
    tools.width,
    tools.fillColor,
    tools.strokeColor,
    tools.filling,
    constr,
    dispatch,
  ]);

  return (
    <div className="canvas">
      <canvas
        onMouseDown={handlerSave}
        ref={canvasRef}
        id="canvas"
        width={800}
        height={600}
      />
    </div>
  );
}

export default Canvas;
