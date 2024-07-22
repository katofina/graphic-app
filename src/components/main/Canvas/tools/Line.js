import Tool from "./Tool";

export default class Line extends Tool {
    constructor(canvas, option) {
        super(canvas, option);
        this.listen();
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        this.currentX = e.clientX - e.target.getBoundingClientRect().left;
        this.currentY =  e.clientY - e.target.getBoundingClientRect().top;
        this.ctx.beginPath();
        this.ctx.moveTo(this.currentX, this.currentY );
        this.save = this.canvas.toDataURL();
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.draw(e.clientX - e.target.getBoundingClientRect().left,  e.clientY - e.target.getBoundingClientRect().top);
        }
    }

    draw(x, y) {
        this.ctx.strokeStyle = this.option.strokeColor;
        const img = new Image();
        img.src = this.save;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.moveTo(this.currentX, this.currentY );
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        };
    }
}