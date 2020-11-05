export interface IGame {
  start: () => void
  gameOver: () => void
  getScore: () => number
}