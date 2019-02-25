class Bird {
  constructor() {
    this.pos = createVector(64, height / 2);

    this.gravity = 0.6;
    this.lift = -7;
    this.velocity = 0;
    this.dead = false;
    this.height = 20;
    this.width = 40;
  }
  up() {
    this.velocity = this.lift;
  }
  update() {
    this.velocity += this.gravity;
    this.pos.y += this.velocity;

    if (this.pos.y >= height - this.height / 2) {
      /* this.pos.y = height - this.h / 2;
      this.velocity = 0; */
      this.dead = true;
    }

    if (this.pos.y < this.height / 2) {
      this.pos.y = this.height / 2;
      this.velocity = 0;
    }
  }
  show() {
    // if (this.dead) return;
    const { x, y } = this.pos;
    stroke(255);
    // fill(255,255,255,0.7);
    // circle(x, y, this.h); 
    push();
    translate(x,y);
   /*    */
    rect(0, 0  , this.width, this.height);
    pop();
  }
}
