import Settings from "../cfg/Settings";
import MovableComponent from "./MovableComponent";

interface IPlayer {
  alive: boolean
  die: () => void
}

interface iKeyboardControl {
  keyControl: (e: KeyboardEvent) => void
}

export default class Doodler extends MovableComponent implements IPlayer, iKeyboardControl {
  private upTimerId: number | null = null;
  private downTimerId: number | null = null;
  private leftTimerId: number | null = null;
  private rightTimerId: number | null = null;

  private startPoint: number;
  private isJumping: boolean = false;
  public alive: boolean = true;

  private isGoingLeft: boolean = false;
  private isGoingRight: boolean = false;

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
      return true;
    }

    return false;
  }

  public keyControl(e: KeyboardEvent): void {
    switch (e.key) {
      case 'ArrowLeft': return this.moveLeft();
      case 'ArrowRight': return this.moveRight();
      case 'ArrowUp': return this.moveStraight();
      default: return;
    }
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
    if (this.isGoingRight && this.rightTimerId) {
      clearInterval(this.rightTimerId);
      this.isGoingRight = false;
    } else if (this.isGoingLeft) {
      return;
    }

    this.isGoingLeft = true;

    this.leftTimerId = window.setInterval(() => {
      if (this.left >= 0) {
        this.left -= Settings.player.moveSpeed;
        this.update();
      } else {
        this.moveRight();
      }
    }, 30);
  }

  private moveRight() {
    if (this.isGoingLeft && this.leftTimerId) {
      clearInterval(this.leftTimerId);
      this.isGoingLeft = false;
    } else if (this.isGoingRight) {
      return;
    }

    this.isGoingRight = true;

    this.rightTimerId = window.setInterval(() => {
      if (this.left <= Settings.grid.width - Settings.player.width) {
        this.left += Settings.player.moveSpeed;
        this.update();
      } else {
        this.moveRight();
      }
    }, 30);
  }

  private moveStraight() {
    this.isGoingRight = false;
    this.isGoingLeft = false;

    if (this.leftTimerId) {
      clearInterval(this.leftTimerId);
    }
    if (this.rightTimerId) {
      clearInterval(this.rightTimerId);
    }

  }

  public stop() {
    this.moveStraight();
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