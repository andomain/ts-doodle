import Grid from "./Components/Grid";
import DoodleGame from "./DoodleGame";

document.addEventListener('DOMContentLoaded', () => {
  const grid = new Grid();
  const doodleGame = new DoodleGame(grid);

  doodleGame.start();

  // const gameOver = () => {
  //   console.log('Game over');
  //   isGoingRight = false;
  //   isGoingLeft = false;
  //   clearInterval(upTimerId);
  //   clearInterval(downTimerId);
  //   clearInterval(rightTimerId);
  //   clearInterval(leftTimerId);
  //   while (grid.firstChild) {
  //     grid.removeChild((grid.firstChild));
  //   }

  //   grid.innerHTML = `${score}`;

  // }

  // start();
})