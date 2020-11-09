import { IGame, IComponent } from '@/interfaces'

export abstract class BaseGame implements IGame {
  public isGameOver = false;
  protected score = 0;
  protected abstract player: IComponent | null;
  protected abstract gameLoopId: number | null;

  constructor (protected container: IComponent) {
    this.addToBody()
  }

  abstract start(): void

  abstract gameOver(): void

  public getScore(): number {
    return this.score
  }

  private addToBody(): void {
    document.body.appendChild(this.container.getDOM())
  }
}