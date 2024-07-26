import Brush from "./Brush";

export default class Rubber extends Brush {
  draw(x: number, y: number) {
    this.ctx!.strokeStyle = "white";
    this.ctx!.lineTo(x, y);
    this.ctx!.stroke();
  }
}
