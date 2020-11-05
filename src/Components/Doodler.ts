import Settings from "../cfg/Settings";
import MovableComponent from "./MovableComponent";

interface IPlayer {
  alive: boolean
  die: () => void
}

export default class Doodler extends MovableComponent implements IPlayer {
  private upTimerId: number | null = null;
  private downTimerId: number | null = null;

  private startPoint: number;
  private isJumping: boolean = false;
  public alive: boolean = true;

  constructor (protected left: number, protected bottom: number) {
    super(Settings.player.width, Settings.player.height, Settings.player.color);
    this.startPoint = bottom;
    this.update();
  }

  public jump() {
    if (this.downTimerId) {
      clearInterval(this.downTimerId);
    }
    this.isJumping = true;
    this.upTimerId = window.setInterval(() => {
      this.moveUp();
      if (this.bottom > this.startPoint + Settings.player.jumpHeight) {
        this.fall();
      }
    }, 30);
  }

  fall() {
    if (this.upTimerId) {
      clearInterval(this.upTimerId);
    }
    this.isJumping = false;

    this.downTimerId = window.setInterval(() => {
      this.moveDown();

      if (this.bottom <= 0) {
        this.die();
      }
    }, 30)
  }

  private moveUp() {
    this.bottom += 20;
    this.update();
  }

  moveDown() {
    this.bottom -= 5;
    this.update();
  }

  moveLeft() {
    console.log('Move left here')
  }

  moveRight() {
    console.log('Move right here')
  }

  die() {
    if (this.upTimerId) {
      clearInterval(this.upTimerId);
    }
    if (this.downTimerId) {
      clearInterval(this.downTimerId);
    }
    this.alive = false;
  }
}