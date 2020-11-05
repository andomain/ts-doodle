import { IComponent } from '@/interfaces';

export class BaseComponent implements IComponent {
  protected element: HTMLDivElement;

  constructor (public width: number, public height: number, public background: string) {
    this.element = document.createElement('div');
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.backgroundColor = background;
  }

  getDOM(): HTMLElement {
    return this.element;
  }

  addComponent(component: IComponent): void {
    this.element.appendChild(component.getDOM());
  }

  removeComponent(component: IComponent): void {
    if (this.element) {
      this.element.removeChild(component.getDOM());
    }
  }

  clear(): void {
    this.element.innerHTML = '';
  }
}