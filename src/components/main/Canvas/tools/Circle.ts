import Tool from "./Tool";
import { Option } from "../../../../store/optionSlice";

export default class Circle extends Tool {
  mouseDown: boolean;
  startX: number;
  startY: number;
  save: string;
  constructor(canvas: HTMLCanvasElement, option: Option) {
    super(canvas, option);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    let save = this.canvas.toDataURL();
    this.ctx!.beginPath();
    this.startX =
      e.clientX - (e.target as HTMLElement).getBoundingClientRect().left;
    this.startY =
      e.clientY - (e.target as HTMLElement).getBoundingClientRect().top;
    this.save = save;
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      let curentX =
        e.clientX - (e.target as HTMLElement).getBoundingClientRect().left;
      let curentY =
        e.clientY - (e.target as HTMLElement).getBoundingClientRect().top;
      let width = curentX - this.startX;
      let height = curentY - this.startY;
      let radius = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX, this.startY, radius);
    }
  }

  draw(x: number, y: number, r: number) {
    this.ctx!.strokeStyle = this.option.strokeColor;
    this.ctx!.fillStyle = this.option.fillColor;
    const img = new Image();
    img.src = this.save;
    img.onload = () => {
      this.ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx!.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx!.beginPath();
      this.ctx!.arc(x, y, r, 0, 2 * Math.PI);
      if (this.option.filling === true) this.ctx!.fill();
      this.ctx!.stroke();
    };
  }
}
