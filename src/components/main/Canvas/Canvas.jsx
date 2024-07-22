import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import canvas from '../../../store/canvasSlice';
import Brush from './tools/Brush';
import option from '../../../store/optionSlice';

function Canvas() {
    const dispatch = useDispatch();
    const canvasRef = useRef();
    const tools = useSelector((store) => store.option);

    function handlerSave() {
        dispatch(canvas.actions.pushAllDo(canvasRef.current.toDataUrl()));
    };

    useEffect(() => {
        dispatch(canvas.actions.setCanvas(canvasRef.current));
        if(tools.option) {
        const constr = tools.option.constructor;
        dispatch(option.actions.setOption(new constr(canvasRef.current, tools)));
        console.log(tools);
        }
    }, [tools.width, tools.fillColor, tools.strokeColor, tools.filling])

    return (
        <div className="canvas">
            <canvas onMouseDown={handlerSave} ref={canvasRef} id='canvas' width={800} height={600}/>
        </div>
    )
}

export default Canvas;