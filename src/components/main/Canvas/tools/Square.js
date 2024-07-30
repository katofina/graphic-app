import Tool from "./Tool";

export default class Square extends Tool {
    constructor(canvas, option, lineWidth) {
        super(canvas, option, lineWidth);
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
        this.startX = e.clientX - e.target.getBoundingClientRect().left;
        this.startY = e.clientY - e.target.getBoundingClientRect().top;
        this.save = this.canvas.toDataURL(); //save canvas
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            let currentX = e.clientX - e.target.getBoundingClientRect().left;
            let currentY = e.clientY - e.target.getBoundingClientRect().top;
            let width = currentX - this.startX;
            let height = currentY - this.startY;
            this.draw(this.startX, this.startY, width, height);
        }
    }

    draw(x, y, w, h) {
        this.ctx.strokeStyle = this.option.strokeColor;
        this.ctx.fillStyle = this.option.fillColor;
        const img = new Image();
        img.src = this.save;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear to see current object
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height); //see the save figure
            this.ctx.beginPath(); //begin memorize figure
            this.ctx.rect(x, y, w, h); //draws rectangle
            this.ctx.stroke(); // outlines the figure with the contour
            if (this.option.filling === true) this.ctx.fill();
        };
    }
}