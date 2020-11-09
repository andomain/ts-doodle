import { Grid } from '@/components';
import { DoodleGame } from './DoodleGame';

document.addEventListener('DOMContentLoaded', () => {
  const grid = new Grid();
  const doodleGame = new DoodleGame(grid);

  doodleGame.start();
});
