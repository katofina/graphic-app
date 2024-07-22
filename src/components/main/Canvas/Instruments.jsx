import { useDispatch, useSelector } from "react-redux";
import option from "../../../store/optionSlice";
import Brush from "./tools/Brush";
import Square from "./tools/Square";
import Circle from "./tools/Circle";
import Rubber from "./tools/Rubber";
import Line from "./tools/Line";

const Instruments = () => {
    const dispatch = useDispatch();
    const canvas = useSelector((store) => store.canvas.canvas);
    const tools = useSelector((store) => store.option);

    function changeColor(e) {
        const color = e.target.value;
        dispatch(option.actions.setStrokeColor(color));
    };

    return (
        <div className="panel-instrument">
        <button
            className="instrument-button brush"
            onClick={() => dispatch(option.actions.setOption(new Brush(canvas, tools)))}
        ></button>
        <button
            className="instrument-button square"
            onClick={() => dispatch(option.actions.setOption(new Square(canvas, tools)))}
        ></button>
        <button 
            className="instrument-button circle" 
            onClick={() => dispatch(option.actions.setOption(new Circle(canvas, tools)))}>
        </button>
        <button 
            className="instrument-button rubber"
            onClick={() => dispatch(option.actions.setOption(new Rubber(canvas, tools)))}>
        </button>
        <button 
            className="instrument-button line"
            onClick={() => dispatch(option.actions.setOption(new Line(canvas, tools)))}>
        </button>
        <input type="color" style={{ marginLeft: 10 }}  onChange={(e) => changeColor(e)}/>
        <button className="instrument-button back"></button>
        <button className="instrument-button forward"></button>
        <button className="instrument-button save"></button>
    </div>
    );
};

export default Instruments;
