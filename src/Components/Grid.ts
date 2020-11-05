import BaseComponent from "./BaseComponent";

export default class Grid extends BaseComponent {
  constructor () {
    super(400, 600, 'lightblue');
    this.element.style.position = 'relative';
  }
}