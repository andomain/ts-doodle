import BaseComponent from "./BaseComponent";
import Settings from "../cfg/Settings";

export default class Grid extends BaseComponent {
  constructor () {
    super(Settings.grid.width, Settings.grid.height, Settings.grid.color);
    this.element.style.position = 'relative';
  }
}