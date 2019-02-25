class Pipe {
  constructor() {
    this.spacing = 125; //random(90, 150  );

    this.top = random(height / 6, height * 0.75);

    this.bottom = this.top + this.spacing;
    this.x = width;
    this.w = 80;
    this.speed = 3;

    this.passed = false;
    this.highlight = false;
  }

  hits(bird) {
    let halfBirdHeight = bird.height / 2;
    let halfBirdwidth = bird.width / 2;
    if ( bird.pos.y + halfBirdHeight < this.top || bird.pos.y + halfBirdHeight > this.bottom) {
      if (bird.pos.x + halfBirdwidth > this.x && bird.pos.x - halfBirdwidth < this.x + this.w) {
        this.highlight = true;
        this.passed = true;
        return true;
      }
    }
    this.highlight = false;
    return false;


  }
  pass(bird) {
    if (bird.pos.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  }
  update() {
    this.x -= this.speed;
  }
  offScreen() {
    return this.x < -this.w;
  }
  show() {
    fill(255);
    rectMode(CORNER);
    rect(this.x, 0, this.w, this.top);

    rect(this.x, this.bottom, this.w, height - (this.top + this.spacing));
  }
}
