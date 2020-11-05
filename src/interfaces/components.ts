import { Position } from '@/types';

export interface IComponent {
  width: number
  height: number
  background: string

  getDOM: () => HTMLElement
  addComponent: (component: IComponent) => void
  removeComponent: (component: IComponent) => void
  clear: () => void
}

export interface IPositionable {
  update: () => void
  readonly position: Position
}