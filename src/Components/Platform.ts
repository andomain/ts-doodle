import Settings from "../cfg/Settings";
import BaseComponent from "./BaseComponent";


export default class Platform extends BaseComponent {
  constructor (public left: number, public bottom: number = 0) {
    super(Settings.platform.width, Settings.platform.height, Settings.platform.color);

    this.element.style.position = 'absolute';
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }
}