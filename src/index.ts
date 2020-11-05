import Grid from "./Components/Grid";
import DoodleGame from "./DoodleGame";

document.addEventListener('DOMContentLoaded', () => {
  const grid = new Grid();
  const doodleGame = new DoodleGame(grid);

  doodleGame.start();
  setTimeout(() => {
    doodleGame.gameOver();
    console.log(doodleGame.getScore());
  }, 1000);
  // const doodler = document.createElement('div');

  // const platforms: Platform[] = [];

  // const isGameOver = false;
  // let startPoint = 150
  // let doodlerLeftSpace = 50;
  // let doodlerBottomSpace = startPoint;
  // let upTimerId: number;
  // let downTimerId: number;
  // let leftTimerId: number;
  // let rightTimerId: number;

  // let isJumping = true;
  // let isGoingLeft = false;
  // let isGoingRight = false;

  // let score = 0;

  // class Platform {
  //   public bottom: number;
  //   public left: number;
  //   public visual: HTMLElement;

  //   constructor (bottomPosition: number) {
  //     this.bottom = bottomPosition;
  //     this.left = Math.random() * 315;
  //     this.visual = document.createElement('div');

  //     this.visual.classList.add('platform');
  //     this.visual.style.left = `${this.left}px`;
  //     this.visual.style.bottom = `${this.bottom}px`;

  //     grid.appendChild((this.visual));
  //   }
  // }

  // const createDoodler = (parent: HTMLElement, doodler: HTMLElement) => {
  //   parent.appendChild(doodler);
  //   doodler.classList.add('doodler');
  //   doodlerLeftSpace = platforms[0].left;
  //   doodlerBottomSpace = platforms[0].bottom + 20;
  //   doodler.style.left = `${doodlerLeftSpace}px`;
  //   doodler.style.bottom = `${doodlerBottomSpace}px`;
  // }

  // const createPlatforms = () => {
  //   for (let i = 0; i < PLATFORM_COUNT; i++) {
  //     const platformGap = 600 / PLATFORM_COUNT;
  //     const newPlatformBottom = 100 + i * platformGap;
  //     platforms.push(new Platform(newPlatformBottom))
  //   }
  // }

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

  // const jump = () => {
  //   clearInterval(downTimerId);
  //   isJumping = true;
  //   upTimerId = window.setInterval(() => {
  //     doodlerBottomSpace += 20;
  //     doodler.style.bottom = `${doodlerBottomSpace}px`;
  //     if (doodlerBottomSpace > startPoint + 200) {
  //       fall();
  //     }
  //   }, 30);
  // }

  // const fall = () => {
  //   clearInterval(upTimerId);
  //   isJumping = false;
  //   downTimerId = window.setInterval(() => {
  //     doodlerBottomSpace -= 5;
  //     doodler.style.bottom = `${doodlerBottomSpace}px`;
  //     if (doodlerBottomSpace <= 0) {
  //       gameOver();
  //     }
  //     platforms.forEach(platform => {
  //       if (
  //         (doodlerBottomSpace >= platform.bottom)
  //         && (doodlerBottomSpace <= platform.bottom + 15)
  //         && (doodlerLeftSpace + 60 >= platform.left)
  //         && (doodlerLeftSpace <= platform.left + 85)
  //         && !isJumping) {
  //         console.log('Landed');
  //         startPoint = doodlerBottomSpace;
  //         jump();
  //       }
  //     })
  //   }, 30)
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