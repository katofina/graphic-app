import React, { MutableRefObject } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import canvas from '../../../store/canvasSlice.ts';
import option from '../../../store/optionSlice.ts';
import {Store} from '../../../store/Store.ts';

function Canvas() {
    const dispatch = useDispatch();
    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
    const tools = useSelector((store: Store) => store.option);

    function handlerSave() {
        dispatch(canvas.actions.pushAllDo((canvasRef!.current!).toDataURL()));
    };

    useEffect(() => {
        dispatch(canvas.actions.setCanvas(canvasRef.current!));
        if(tools!.option) {
        const constr = Object.prototype.constructor(tools.option.constructor);
        dispatch(option.actions.setOption(new constr(canvasRef.current, tools)));
        }
    }, [tools.width, tools.fillColor, tools.strokeColor, tools.filling])

    return (
        <div className="canvas">
            <canvas onMouseDown={handlerSave} ref={canvasRef} id='canvas' width={800} height={600}/>
        </div>
    )
}

export default Canvas;