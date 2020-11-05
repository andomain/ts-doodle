import Settings from "../cfg/Settings";
import BaseComponent from "./BaseComponent";

export default class Doodler extends BaseComponent {
  constructor (private left: number, private bottom: number) {
    super(Settings.player.width, Settings.player.height, Settings.player.color);
    this.element.style.position = 'absolute';
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }
}