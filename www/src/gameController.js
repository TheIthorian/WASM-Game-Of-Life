import { Universe } from 'wasm-game-of-life';
import { memory } from 'wasm-game-of-life/wasm_game_of_life_bg';

export class GameController {
    /**
    universe;
    width;
    height;
    renderer;
    play = false;
    */

    constructor(renderer, { width, height }) {
        this.universe = Universe.new(width, height);

        this.width = this.universe.width();
        this.height = this.universe.height();

        this.renderer = renderer;
        this.renderer.setDimensions({ width: this.width, height: this.height });
    }

    start() {
        this.play = true;
        const gameLoop = () => {
            this.renderer.drawFps();
            this.universe.tick();

            this.renderer.drawGrid();

            const cellsPtr = this.universe.cells();
            const cells = new Uint8Array(memory.buffer, cellsPtr, this.width * this.height);
            console.log({ memory, cellsPtr, cells, size: this.width * this.height });
            this.renderer.drawCells(cells);

            console.log('render');

            requestAnimationFrame(gameLoop);
        };

        requestAnimationFrame(gameLoop);
    }

    stop() {
        this.play = false;
    }
}
