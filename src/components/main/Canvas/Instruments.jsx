import { useDispatch, useSelector } from "react-redux";
import canvas from "../../../store/canvasSlice";
import option from "../../../store/optionSlice";
import Brush from "./tools/Brush";
import Square from "./tools/Square";
import Circle from "./tools/Circle";
import Rubber from "./tools/Rubber";
import Line from "./tools/Line";
import saver from '../../../store/canvasSlice';

const Instruments = () => {
    const dispatch = useDispatch();
    const fabric = useSelector((store) => store.canvas);
    const tools = useSelector((store) => store.option);
    const auth = useSelector((store) => store.sign);

    function changeColor(e) {
        const color = e.target.value;
        dispatch(option.actions.setStrokeColor(color));
    };

    function back() {
        let context = fabric.canvas.getContext('2d');
        if (fabric.allDo.length > 0) {
            let lastElUrl = fabric.allDo.at(-1);
            dispatch(canvas.actions.pushCancelDo(fabric.canvas.toDataURL()));
            let img = new Image();
            img.src = lastElUrl;
            img.onload = () => {
                context.clearRect(0, 0, fabric.canvas.width, fabric.canvas.height);
                context.drawImage(img, 0, 0, fabric.canvas.width, fabric.canvas.height);
            };
        } else {
            context.clearRect(0, 0, fabric.canvas.width, fabric.canvas.height);
        }
    };

    function forward() {
        let context = fabric.canvas.getContext('2d');
        if (fabric.cancelDo.length > 0) {
            let lastElUrl = fabric.cancelDo.at(-1);
            dispatch(canvas.actions.forwardDo(fabric.canvas.toDataURL()));
            let img = new Image();
            img.src = lastElUrl;
            img.onload = () => {
                context.clearRect(0, 0, fabric.canvas.width, fabric.canvas.height);
                context.drawImage(img, 0, 0, fabric.canvas.width, fabric.canvas.height);
            };
        };
    };

    function save() {
        if(auth.auth) {
            const same = fabric.save.some(el => el === fabric.canvas.toDataURL());
            if (!same) dispatch(canvas.actions.pushSave(fabric.canvas.toDataURL()));
        } else {
            alert('You should sign in or sign up for save the image');
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
