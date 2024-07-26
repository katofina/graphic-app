import Tool from "./Tool";
import { Option } from "../../../../store/optionSlice";

export default class Brush extends Tool {
  mouseDown: boolean;
  constructor(canvas: HTMLCanvasElement, option: Option) {
    super(canvas, option);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    this.ctx!.beginPath(); //begin memorize figure
    this.ctx!.moveTo(
      e.clientX - (e.target as HTMLInputElement).getBoundingClientRect().left,
      e.clientY - (e.target as HTMLInputElement).getBoundingClientRect().top,
    ); //puts down the pen
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      this.draw(
        e.clientX - (e.target as HTMLInputElement).getBoundingClientRect().left,
        e.clientY - (e.target as HTMLInputElement).getBoundingClientRect().top,
      );
    }
  }

  draw(x: number, y: number) {
    this.ctx!.strokeStyle = this.option.strokeColor;
    this.ctx!.lineTo(x, y); //leads the line to
    this.ctx!.stroke(); //outlines the shape with the contour
  }
}
