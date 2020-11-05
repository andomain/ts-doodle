import BaseGame from "./Game";
import Platform from './Components/Platform';
import Settings from "./cfg/Settings";

export default class DoodleGame extends BaseGame {
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

  start() {
    if (!this.isGameOver) {
      console.log('Start Game');
      this.createPlatforms();
    }
  }
  gameOver() {
    console.log('Game Over');
  }
}