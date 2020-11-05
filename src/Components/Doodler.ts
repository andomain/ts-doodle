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

  private fall() {
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

  public isOn(platform: MovableComponent): boolean {
    const position = platform.position;

    if ((this.bottom >= position.bottom)
      && (this.bottom <= position.bottom + Settings.platform.height)
      && (this.left + Settings.player.width >= position.left)
      && (this.left <= position.left + Settings.platform.width)
      && !this.isJumping
    ) {
      this.startPoint = this.bottom;
      this.stop();
      return true;
    }

    return false;
  }


  private moveUp() {
    this.bottom += 20;
    this.update();
  }

  private moveDown() {
    this.bottom -= 5;
    this.update();
  }

  private moveLeft() {
    console.log('left here')
  }

  private moveRight() {
    console.log('Move right here')
  }

  public stop() {
    if (this.upTimerId) {
      clearInterval(this.upTimerId);
    }
    if (this.downTimerId) {
      clearInterval(this.downTimerId);
    }
  }

  die() {
    this.stop();
    this.alive = false;
  }
}