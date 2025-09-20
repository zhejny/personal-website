import { PerlinNoise } from "./flower-petal-noisefunction";

export class Petal {
  height: number;
  width: number;
  index: number;
  petals: number;
  color: number[];

  start: { x: number; y: number };
  length: number;
  angle: number;
  end: { x: number; y: number };
  ctrl1: { x: number; y: number };
  ctrl2: { x: number; y: number };
  ctrl1Seeds: { x: number; y: number };
  ctrl2Seeds: { x: number; y: number };

  frames: number;
  morph: number;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    petalIndex: number,
    totalPetals: number,
    flowerColor: number[]
  ) {
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.index = petalIndex;
    this.color = flowerColor.map((val) => {
      return val + Math.random() * 33;
    });
    this.color.push(0.25 + Math.random() * 0.75);

    this.start = { x: this.width / 2, y: this.height / 2 };
    this.length = this.height > this.width ? this.width : this.height;
    this.length = (this.length / 2) * Math.random();
    this.angle = (this.index * 2 * Math.PI) / totalPetals; // stagger with noise?
    this.end = {
      x: this.width / 2 + this.length * Math.sin(this.angle),
      y: this.height / 2 + this.length * Math.cos(this.angle),
    };
    this.ctrl1Seeds = { x: Math.random(), y: Math.random() };
    this.ctrl1 = {
      x: this.width / 2 + this.ctrl1Seeds.x * (this.end.x - this.width / 2),
      y: this.height / 2 + this.ctrl1Seeds.y * (this.end.y - this.height / 2),
    };
    this.ctrl2Seeds = { x: Math.random(), y: Math.random() };
    this.ctrl2 = {
      x: this.width / 2 + this.ctrl2Seeds.x * (this.end.x - this.width / 2),
      y: this.height / 2 + this.ctrl2Seeds.y * (this.end.y - this.height / 2),
    };

    this.frames = 0;
    this.morph = 0.000033;
    this.petals = totalPetals;
  }

  rgbaString(array: number[]) {
    let rgba = "rgba(";
    for (let i = 0; i < 3; i++) {
      rgba = rgba + array[i].toString() + ", ";
    }
    rgba = rgba + array[3] + ")";
    return rgba;
  }

  direction() {
    const coin = Math.floor(Math.random() * 2) == 0;
    let direction;
    if (coin) {
      direction = 1;
    } else {
      direction = -1;
    }
    return direction;
  }

  morphColor(degreeRange: number) {
    const direction: number = this.direction();
    return Math.random() * degreeRange * direction;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo(this.start.x, this.start.y);
    context.bezierCurveTo(
      this.ctrl1.x,
      this.ctrl1.y,
      this.ctrl2.x,
      this.ctrl2.y,
      this.end.x,
      this.end.y
    );
    context.fillStyle = this.rgbaString(this.color);
    context.fill();
    context.strokeStyle = "white"; // this.rgbaString(this.color)
    context.stroke();
    context.closePath();
  }

  update() {
    this.angle =
      (this.index * 2 * Math.PI) / this.petals +
      2 * Math.PI * PerlinNoise(0, this.index, this.frames * this.morph);
    this.end = {
      x: this.width / 2 + this.length * Math.sin(this.angle),
      y: this.height / 2 + this.length * Math.cos(this.angle),
    };
    this.ctrl1 = {
      x:
        this.width / 2 +
        (this.ctrl1Seeds.x +
          PerlinNoise(2, this.index, this.frames * this.morph)) *
          (this.end.x - this.width / 2),
      y:
        this.height / 2 +
        (this.ctrl1Seeds.y +
          PerlinNoise(3, this.index, this.frames * this.morph)) *
          (this.end.y - this.height / 2),
    };
    this.ctrl2 = {
      x:
        this.width / 2 +
        (this.ctrl2Seeds.x +
          PerlinNoise(4, this.index, this.frames * this.morph)) *
          (this.end.x - this.width / 2),
      y:
        this.height / 2 +
        (this.ctrl2Seeds.y +
          PerlinNoise(5, this.index, this.frames * this.morph)) *
          (this.end.y - this.height / 2),
    };

    for (let i = 0; i < 3; i++) {
      this.color[i] =
        Math.floor(Math.random() * 15) == 0
          ? (this.color[i] + this.morphColor(3))
          : this.color[i];
    }

    this.frames++;
  }
}
