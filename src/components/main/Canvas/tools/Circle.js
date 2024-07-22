import Tool from "./Tool";

export default class Circle extends Tool {
    constructor(canvas, option) {
        super(canvas, option);
        this.listen();
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        let save = this.canvas.toDataURL();
        this.ctx.beginPath();
        this.startX = e.clientX - e.target.getBoundingClientRect().left;
        this.startY = e.clientY - e.target.getBoundingClientRect().top;
        this.save = save;
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            let curentX =  e.clientX - e.target.getBoundingClientRect().left;
            let curentY =  e.clientY - e.target.getBoundingClientRect().top;
            let width = curentX - this.startX;
            let height = curentY - this.startY;
            let radius = Math.sqrt(width ** 2 + height ** 2);
            this.draw(this.startX, this.startY, radius);
        }
    }

    draw(x, y, r) {
        this.ctx.strokeStyle = this.option.strokeColor;
        this.ctx.fillStyle = this.option.fillColor;
        const img = new Image();
        img.src = this.save;
        img.onload = () => {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(x, y, r, 0, 2 * Math.PI);
            if (this.option.filling === true) this.ctx.fill();
            this.ctx.stroke();
        };
    }
}