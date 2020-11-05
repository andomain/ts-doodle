import BaseGame from "./Game";
import Platform from './Components/Platform';
import Settings from "./cfg/Settings";
import { IComponent } from "./Components/BaseComponent";
import Grid from "./Components/Grid";
import Doodler from "./Components/Doodler";

export default class DoodleGame extends BaseGame {
  protected gameLoopId: number | null;
  protected player: Doodler | null;

  constructor (container: Grid) {
    super(container);
    this.player = null;
    this.gameLoopId = null;
  }
  private platforms: Platform[] = [];

  private createPlatforms() {
    for (let i = 0; i < Settings.game.platformCount; i++) {
      const platformInterval = Settings.grid.height / Settings.game.platformCount;
      const platformLeft = Math.random() * (Settings.grid.width - Settings.platform.width);
      const platform = new Platform(platformLeft, i * platformInterval);

      this.container.addComponent(platform);
      this.platforms.push(platform);
    }
  }

  private createPlayer() {
    this.player = new Doodler(
      this.platforms[0].left + (Settings.platform.width - Settings.player.width) / 2,
      this.platforms[0].bottom + Settings.platform.height
    );
    this.container.addComponent(this.player);
  }

  start() {
    if (!this.isGameOver) {
      console.log('Start Game');
      this.createPlatforms();
      this.createPlayer();
      setTimeout(() => this.player!.jump(), 1000);
      this.gameLoopId = window.setInterval(() => {
        const playerPosition = this.player!.position;
        if(playerPosition.bottom <= 0) {
          this.player!.die();
        }

        if (!this.player!.alive) {
          this.gameOver();
        }
      }, 30)
    }
  }
  gameOver() {
    console.log('Game Over');
    if (this.gameLoopId) {
      clearInterval(this.gameLoopId);
    }
  }
}