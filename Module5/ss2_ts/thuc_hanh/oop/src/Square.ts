import Shape from "./Shape";
import IArea from "./IArea";

export class Square extends Shape implements IArea {
  constructor(x: number, y: number, private z: number) {
    super(x, y);
  }

  getZ() {
    return this.z;
  }

  setZ(z: number) {
    this.z = z;
  }

  getPerimeter(): number {
    return this.z * (this.getX() + this.getY());
  }

  getArea(): number {
    return this.z * this.getX() * this.getY();
  }

  toString(): string {
    return `x: ${this.getX()}; y: ${this.getY()}; z: ${this.getZ()}`;
  }
}
