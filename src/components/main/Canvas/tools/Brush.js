import Tool from "./Tool";

export default class Brush extends Tool {
    constructor(canvas, option) {
        super(canvas, option);
        this.listen();
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        this.ctx.beginPath(); //begin memorize figure
        this.ctx.moveTo(e.clientX - e.target.getBoundingClientRect().left, e.clientY - e.target.getBoundingClientRect().top); //puts down the pen
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            this.draw(e.clientX - e.target.getBoundingClientRect().left, e.clientY - e.target.getBoundingClientRect().top);
        }
    }

    draw(x, y) {
        this.ctx.strokeStyle = this.option.strokeColor;
        this.ctx.lineTo(x, y); //leads the line to
        this.ctx.stroke(); //outlines the shape with the contour
    }
}