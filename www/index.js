import { HEIGHT, WIDTH } from './src/constants';
import { FPS } from './src/fps';
import { GameController } from './src/gameController';
import { Renderer } from './src/renderer';

// Give the canvas room for all of our cells and a 1px border
// around each of them.
const canvas = document.getElementById('game-of-life-canvas');
const fpsDiv = document.getElementById('fps');

const fps = new FPS(fpsDiv);
const renderer = new Renderer(canvas, fps);

const gameController = new GameController(renderer, { width: WIDTH, height: HEIGHT });
gameController.start();
