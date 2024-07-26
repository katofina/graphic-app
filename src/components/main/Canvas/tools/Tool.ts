import { Option } from "../../../../store/optionSlice";

export default class Tool {
  canvas: HTMLCanvasElement;
  option: Option;
  ctx: CanvasRenderingContext2D | null;
  constructor(canvas: HTMLCanvasElement, option: Option) {
    this.canvas = canvas;
    this.option = option;
    this.ctx = this.canvas.getContext("2d");
    this.ctx!.lineWidth = Number(this.option.width);
    this.revokeEvents();
  }

  revokeEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
