import { BaseComponent } from './BaseComponent'
import { Position } from './Position'
import { IPositionable } from '@/interfaces'

export abstract class MovableComponent extends BaseComponent implements IPositionable {
  protected abstract left: number;
  protected abstract bottom: number;
  protected upTimerId: number | null = null;
  protected downTimerId: number | null = null;
  protected leftTimerId: number | null = null;
  protected rightTimerId: number | null = null;

  constructor (width: number, height: number, background: string) {
    super(width, height, background)
    this.element.style.position = 'absolute'
  }

  update(): void {
    this.element.style.left = `${this.left}px`
    this.element.style.bottom = `${this.bottom}px`
  }

  get position(): Position {
    return {
      left: this.left,
      bottom: this.bottom
    }
  }
}