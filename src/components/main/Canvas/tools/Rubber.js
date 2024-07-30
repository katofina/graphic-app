import Tool from "./Tool";
import Brush from "./Brush";

export default class Rubber extends Brush {
    constructor(canvas, option) {
        super(canvas, option);
    }


    draw(x, y) {
        this.ctx.strokeStyle = "white";
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
}