export interface IPlayer {
  alive: boolean
  die: () => void
}

export interface IKeyboardControl {
  keyControl: (e: KeyboardEvent) => void
}