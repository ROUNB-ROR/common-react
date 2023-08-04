// based on https://codepen.io/judag/pen/XmXMOL

// Class represents fireworks particle
export default class Particle {
  constructor(xPoint, yPoint) {
    this.gravity = 0.05;

    this.size = Math.random() * 4 + 1;

    this.x = xPoint - this.size / 2;
    this.y = yPoint - this.size / 2;

    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;

    this.alpha = Math.random() * 0.5 + 0.5;
  }

  move() {
    this.x += this.vx;
    this.vy += this.gravity;
    this.y += this.vy;
    this.alpha -= 0.01;
    if (
      this.x <= -this.size
      || this.x >= window.screen.width
      || this.y >= window.screen.height
      || this.alpha <= 0
    ) {
      return false;
    }
    return true;
  }

  draw(oldC) {
    const c = oldC;
    c.save();
    c.beginPath();

    c.translate(this.x + this.size / 2, this.y + this.size / 2);
    c.arc(0, 0, this.size, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.globalAlpha = this.alpha;

    c.closePath();
    c.fill();
    c.restore();
  }
}
