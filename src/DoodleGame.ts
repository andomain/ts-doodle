import { BaseGame } from "./Game";

export default class DoodleGame extends BaseGame {
  start() {
    console.log('Start Game');
  }
  gameOver() {
    console.log('Game Over');
  }
}