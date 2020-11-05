import { Settings } from '@/cfg';
import { MovableComponent } from '@/types';

export class Platform extends MovableComponent {
  constructor (public left: number, public bottom: number = 0) {
    super(Settings.platform.width, Settings.platform.height, Settings.platform.color);
    this.update();
  }

  public moveDown(amount: number): void {
    this.bottom -= amount;
    this.update();
  }
}

export class PlatformFactory {
  static newPlatform(bottom = (Settings.grid.height / Settings.game.platformCount) * Settings.game.platformCount): Platform {
    const left = Math.random() * (Settings.grid.width - Settings.platform.width);
    return new Platform(left, bottom);
  }
}