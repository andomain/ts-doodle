import Settings from "../cfg/Settings";
import MovableComponent from "./MovableComponent";

export default class Score extends MovableComponent {
  public bottom = 0;
  public left = 0;
  constructor (score: number) {
    super(Settings.score.width, Settings.score.height, Settings.score.color);
    this.element.style.fontSize = `${Settings.score.fontSize}px`;
    this.element.style.height = '100%';
    this.element.style.display = 'flex';
    this.element.style.justifyContent = 'center';
    this.element.style.alignItems = 'center';
    this.element.innerHTML = score.toString();
    this.update();
  }
}