import BaseGame from "./Game";
import Platform from './Components/Platform';

export default class DoodleGame extends BaseGame {
  private createPlatforms() {
    const platform = new Platform();
    this.container.addComponent(platform);
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