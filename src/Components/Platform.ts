import BaseComponent from "./BaseComponent";


export default class Platform extends BaseComponent {
  constructor () {
    super(85, 15, 'green');
    this.element.style.position = 'absolute';
  }
}