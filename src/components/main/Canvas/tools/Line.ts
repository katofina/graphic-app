import Tool from "./Tool.ts";
import { Option } from "../../../../store/optionSlice.ts";

export default class Line extends Tool {
    mouseDown: boolean;
    currentX: number;
    currentY: number;
    save: string;
    constructor(canvas: HTMLCanvasElement, option: Option) {
        super(canvas, option);
        this.listen();
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true;
        this.currentX = e.clientX - (e.target as HTMLElement).getBoundingClientRect().left;
        this.currentY =  e.clientY - (e.target as HTMLElement).getBoundingClientRect().top;
        this.ctx!.beginPath();
        this.ctx!.moveTo(this.currentX, this.currentY );
        this.save = this.canvas.toDataURL();
    }

    mouseUpHandler() {
        this.mouseDown = false;
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            this.draw(e.clientX - (e.target as HTMLElement).getBoundingClientRect().left,  e.clientY - (e.target as HTMLElement).getBoundingClientRect().top);
        }
    }

    draw(x: number, y: number) {
        this.ctx!.strokeStyle = this.option.strokeColor;
        const img = new Image();
        img.src = this.save;
        img.onload = () => {
            this.ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx!.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx!.beginPath();
            this.ctx!.moveTo(this.currentX, this.currentY );
            this.ctx!.lineTo(x, y);
            this.ctx!.stroke();
        };
    }
}