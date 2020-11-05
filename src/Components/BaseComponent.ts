export interface IComponent {
  width: number;
  height: number;
  background: string

  getDOM: () => HTMLElement
  addComponent: (component: IComponent) => void
  removeComponent: (component: IComponent) => void
  clear: () => void
}

export default class BaseComponent implements IComponent {
  protected element: HTMLDivElement;

  constructor (public width: number, public height: number, public background: string) {
    this.element = document.createElement('div');
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.backgroundColor = background;
  }

  getDOM() {
    return this.element;
  }

  addComponent(component: IComponent) {
    this.element.appendChild(component.getDOM());
  }

  removeComponent(component: IComponent) {
    if (this.element) {
      this.element.removeChild(component.getDOM());
    }
  }

  clear() {
    this.element.innerHTML = '';
  }
}