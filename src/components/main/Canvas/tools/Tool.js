export default class Tool {
    constructor(canvas, option) {
        this.canvas = canvas;
        this.option = option;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineWidth = this.option.width;
        this.revokeEvents();
    }

    revokeEvents() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}