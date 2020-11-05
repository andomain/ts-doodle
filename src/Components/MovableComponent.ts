import BaseComponent from "./BaseComponent";

type Position = {
  left: number,
  bottom: number,
}

interface IPositionable {
  update: () => void
  readonly position: Position, 
}

export default abstract class MovableComponent extends BaseComponent implements IPositionable {
  protected abstract left: number;
  protected abstract bottom: number;

  constructor (width: number, height: number, background: string) {
    super(width, height, background);
    this.element.style.position = 'absolute';
  }

  update() {
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }
  
  get position(): Position {
    return {
      left: this.left,
      bottom: this.bottom
    }
  }
}