import Settings from "../cfg/Settings";
import BaseComponent from "./BaseComponent";
import MovableComponent from "./MovableComponent";


export default class Platform extends MovableComponent {
  constructor (public left: number, public bottom: number = 0) {
    super(Settings.platform.width, Settings.platform.height, Settings.platform.color);
    this.update();
  }

  public moveDown(amount: number) {
    this.bottom -= amount;
    this.update();
  }
}