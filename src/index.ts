import Grid from "./Components/Grid";
import DoodleGame from "./DoodleGame";

document.addEventListener('DOMContentLoaded', () => {
  const grid = new Grid();
  const doodleGame = new DoodleGame(grid);

  doodleGame.start();
  // let leftTimerId: number;
  // let rightTimerId: number;

  // let isGoingLeft = false;
  // let isGoingRight = false;

  // const movePlatforms = () => {
  //   if (doodlerBottomSpace > 200) {
  //     platforms.forEach(platform => {
  //       platform.bottom -= 4;
  //       let visual = platform.visual;
  //       visual.style.bottom = `${platform.bottom}px`;
  //       if (platform.bottom < 10) {
  //         let firstPlatform = platforms[0].visual;
  //         firstPlatform.classList.remove('platform');
  //         platforms.shift();
  //         const newPlatform = new Platform(600);
  //         platforms.push(newPlatform);
  //         score++;
  //       }
  //     })
  //   }
  // }

  // const moveLeft = () => {
  //   if (isGoingRight) {
  //     clearInterval(rightTimerId)
  //     isGoingRight = false;
  //   }
  //   isGoingLeft = true;

  //   leftTimerId = window.setInterval(() => {
  //     if (doodlerLeftSpace >= 0) {
  //       doodlerLeftSpace -= 5;
  //       doodler.style.left = `${doodlerLeftSpace}px`;
  //     } else {
  //       moveRight();
  //     }
  //   }, 30)
  // }

  // const moveRight = () => {
  //   if (isGoingLeft) {
  //     clearInterval(leftTimerId)
  //     isGoingLeft = false;
  //   }
  //   isGoingRight = true;

  //   rightTimerId = window.setInterval(() => {
  //     if (doodlerLeftSpace <= 340) {
  //       doodlerLeftSpace += 5;
  //       doodler.style.left = `${doodlerLeftSpace}px`;
  //     } else {
  //       moveLeft();
  //     }
  //   }, 30)
  // }

  // const moveStraight = () => {
  //   isGoingRight = false;
  //   isGoingLeft = false;
  //   clearInterval(rightTimerId);
  //   clearInterval(leftTimerId);
  // }

  // const control = (e: KeyboardEvent) => {
  //   if (e.key === 'ArrowLeft') {
  //     moveLeft();
  //   } else if (e.key === 'ArrowRight') {
  //     moveRight();
  //   } else if (e.key === 'ArrowUp') {
  //     moveStraight();
  //   }
  // }

  // const start = () => {
  //   if (!isGameOver) {
  //     createPlatforms();
  //     createDoodler(grid, doodler);
  //     setInterval(movePlatforms, 30)
  //     setTimeout(() => jump(), 1000);
  //     document.addEventListener('keyup', control);
  //   }
  // }

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