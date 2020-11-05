import { Settings } from '@/cfg'
import { IPlayer, IKeyboardControl } from '@/interfaces'
import { MovableComponent } from '@/types'

export class Doodler extends MovableComponent implements IPlayer, IKeyboardControl {
  private startPoint: number;
  private isJumping = false;
  public alive = true;

  private isGoingLeft = false;
  private isGoingRight = false;

  constructor (protected left: number, protected bottom: number) {
    super(Settings.player.width, Settings.player.height, Settings.player.color)
    this.startPoint = bottom
    this.update()
  }

  public jump(): void {
    if (this.downTimerId) {
      clearInterval(this.downTimerId)
    }
    this.isJumping = true
    this.upTimerId = window.setInterval(() => {
      this.moveUp()
      if (this.bottom > this.startPoint + Settings.player.jumpHeight) {
        this.fall()
      }
    }, 30)
  }

  public isOn(platform: MovableComponent): boolean {
    const position = platform.position

    if ((this.bottom >= position.bottom)
      && (this.bottom <= position.bottom + Settings.platform.height)
      && (this.left + Settings.player.width >= position.left)
      && (this.left <= position.left + Settings.platform.width)
      && !this.isJumping
    ) {
      this.startPoint = this.bottom
      return true
    }

    return false
  }

  public keyControl(e: KeyboardEvent): void {
    switch (e.key) {
      case 'ArrowLeft': return this.moveLeft()
      case 'ArrowRight': return this.moveRight()
      case 'ArrowUp': return this.moveStraight()
      default: return
    }
  }

  private fall(): void {
    if (this.upTimerId) {
      clearInterval(this.upTimerId)
    }
    this.isJumping = false

    this.downTimerId = window.setInterval(() => {
      this.moveDown()
    }, 30)
  }

  private moveUp(): void {
    this.bottom += 20
    this.update()
  }

  private moveDown(): void {
    this.bottom -= 5
    this.update()
  }

  private moveLeft(): void {
    if (this.isGoingRight && this.rightTimerId) {
      clearInterval(this.rightTimerId)
      this.isGoingRight = false
    } else if (this.isGoingLeft) {
      return
    }

    this.isGoingLeft = true

    this.leftTimerId = window.setInterval(() => {
      if (this.left >= 0) {
        this.left -= Settings.player.moveSpeed
        this.update()
      } else {
        this.moveRight()
      }
    }, 30)
  }

  private moveRight(): void {
    if (this.isGoingLeft && this.leftTimerId) {
      clearInterval(this.leftTimerId)
      this.isGoingLeft = false
    } else if (this.isGoingRight) {
      return
    }

    this.isGoingRight = true

    this.rightTimerId = window.setInterval(() => {
      if (this.left <= Settings.grid.width - Settings.player.width) {
        this.left += Settings.player.moveSpeed
        this.update()
      } else {
        this.moveRight()
      }
    }, 30)
  }

  private moveStraight(): void {
    this.isGoingRight = false
    this.isGoingLeft = false

    if (this.leftTimerId) {
      clearInterval(this.leftTimerId)
    }
    if (this.rightTimerId) {
      clearInterval(this.rightTimerId)
    }

  }

  public stop(): void {
    this.moveStraight()
    if (this.upTimerId) {
      clearInterval(this.upTimerId)
    }
    if (this.downTimerId) {
      clearInterval(this.downTimerId)
    }
  }

  public die(): void {
    this.stop()
    this.alive = false
  }
}