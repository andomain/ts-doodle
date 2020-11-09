import { BaseComponent } from './BaseComponent'

export class ContainerComponent extends BaseComponent {
  constructor (width: number, height: number, background: string) {
    super(width, height, background)
    this.element.style.position = 'relative'
  }
}