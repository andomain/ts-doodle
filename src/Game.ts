interface IGame {
  start: () => void;
  gameOver: () => void;
  getScore: () => number;
}

export abstract class BaseGame implements IGame {
  public isGameOver: boolean = false;
  protected score = 0;
  constructor (protected container: HTMLElement) { }

  abstract start(): void

  abstract gameOver(): void

  getScore() {
    return this.score;
  }
}