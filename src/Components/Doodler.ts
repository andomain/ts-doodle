import Settings from "../cfg/Settings";
import MovableComponent from "./MovableComponent";

export default class Doodler extends MovableComponent {
  constructor (protected left: number, protected bottom: number) {
    super(Settings.player.width, Settings.player.height, Settings.player.color);
    this.position();
  }

  moveUp() {
    console.log('Move up here')
  }

  moveDown() {
    console.log('Move up here')
  }

  moveLeft() {
    console.log('Move up here')
  }

  moveRight() {
    console.log('Move up here')
  }

}