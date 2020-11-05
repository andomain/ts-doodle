import { IComponent } from './Components/BaseComponent';

interface IGame {
  start: () => void;
  gameOver: () => void;
  getScore: () => number;
}

export default abstract class BaseGame implements IGame {
  public isGameOver: boolean = false;
  protected score = 0;
  protected abstract player: IComponent | null;
  protected abstract gameLoopId: number | null;

  constructor (protected container: IComponent) {
    this.addToBody();
  }

  abstract start(): void

  abstract gameOver(): void

  getScore() {
    return this.score;
  }

  private addToBody() {
    document.body.appendChild(this.container.getDOM());
  }
}