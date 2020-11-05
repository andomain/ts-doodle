import BaseComponent from "./BaseComponent";

interface IPositionable {
  position: () => void
}

export default abstract class MovableComponent extends BaseComponent implements IPositionable {

  protected abstract left: number;
  protected abstract bottom: number;
  constructor (width: number, height: number, background: string) {
    super(width, height, background);
    this.element.style.position = 'absolute';
  }

  position() {
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }
}