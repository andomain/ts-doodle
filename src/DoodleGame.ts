import BaseGame from "./Game";
import Platform from './Components/Platform';
import Settings from "./cfg/Settings";
import { IComponent } from "./Components/BaseComponent";
import Grid from "./Components/Grid";
import Doodler from "./Components/Doodler";
import PlatformFactory from "./Components/PlatformFactory";
import MovableComponent from "./Components/MovableComponent";
import Score from "./Components/Score";

export default class DoodleGame extends BaseGame {
  protected gameLoopId: number | null;
  protected player: Doodler | null;

  public started: boolean = false;

  private keyboardListener: ((e: KeyboardEvent) => void) | null;

  constructor (container: Grid) {
    super(container);
    this.player = null;
    this.gameLoopId = null;
    this.keyboardListener = null;
  }
  private platforms: Platform[] = [];

  private createPlatforms() {
    for (let i = 0; i < Settings.game.platformCount; i++) {
      const platformInterval = Settings.grid.height / Settings.game.platformCount;
      const platform = PlatformFactory.newPlatform(i * platformInterval);

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
      setTimeout(() => {
        this.player!.jump()
        this.started = true;

        // Bind keycontrol to the player & register the listener handle
        this.keyboardListener = this.player!.keyControl.bind(this.player);
        document.addEventListener('keyup', this.keyboardListener);
      }, 1000);

      this.gameLoopId = window.setInterval(() => {
        if (this.started) {
          const playerPosition = this.player!.position;
          if (playerPosition.bottom <= 0) {
            this.player!.die();
          }

          if (!this.player!.alive) {
            this.gameOver();
          }

          const scrollPlatforms = playerPosition.bottom > Settings.player.jumpHeight;

          this.platforms.forEach((platform) => {
            if (this.player!.isOn(platform)) {
              this.player!.jump();
            }

            if (scrollPlatforms) {
              platform.moveDown(Settings.platform.fallSpeed);
              const platformPosition = platform.position;
              if (platformPosition.bottom < 0) {
                this.container.removeComponent(platform);
                this.platforms.shift();

                const newPlatform = PlatformFactory.newPlatform();
                this.container.addComponent(newPlatform);
                this.platforms.push(newPlatform);
                this.score++;
              }
            }

          });
        }
      }, 30)
    }
  }
  gameOver() {
    console.log('Game Over');
    if (this.gameLoopId) {
      clearInterval(this.gameLoopId);
    }
    if (this.keyboardListener) {
      document.removeEventListener('keyup', this.keyboardListener);
    }
    
    this.container.clear();
    const score = new Score(this.score);
    this.container.addComponent(score);
  }
}