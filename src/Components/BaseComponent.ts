export interface IComponent {
  width: number;
  height: number;
  background: string

  getDOM: () => HTMLElement
  addComponent: (component: BaseComponent) => void
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

  addComponent(component: BaseComponent) {
    this.element.appendChild(component.getDOM());
  }
}