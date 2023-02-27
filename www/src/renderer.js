import { CELL_SIZE, GRID_COLOR, DEAD_COLOR, ALIVE_COLOR } from './constants';
import { getIndex } from './util';
import { Cell } from 'wasm-game-of-life';

export class Renderer {
    /**
    canvas;
    ctx;
    fps;

    height;
    width;
     */

    constructor(canvas, fps) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.fps = fps;
    }

    setDimensions({ width, height }) {
        this.width = width;
        this.height = height;

        this.canvas.height = (CELL_SIZE + 1) * height + 1;
        this.canvas.width = (CELL_SIZE + 1) * width + 1;
    }

    drawGrid() {
        this.checkDimensions();

        this.ctx.beginPath();
        this.ctx.strokeStyle = GRID_COLOR;

        // Vertical lines.
        for (let i = 0; i <= this.width; i++) {
            this.ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
            this.ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * this.height + 1);
        }

        // Horizontal lines.
        for (let j = 0; j <= this.height; j++) {
            this.ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
            this.ctx.lineTo((CELL_SIZE + 1) * this.width + 1, j * (CELL_SIZE + 1) + 1);
        }

        this.ctx.stroke();
    }

    drawCells(cells) {
        this.checkDimensions();

        this.ctx.beginPath();

        // Alive cells.
        this.ctx.fillStyle = DEAD_COLOR;
        this.ctx.fillRect(
            0,
            0,
            this.width * CELL_SIZE + this.width,
            this.height * CELL_SIZE * this.height
        );
        this.ctx.fillStyle = ALIVE_COLOR;

        console.log({
            width: this.width,
            height: this.height,
            cells,
        });

        // Dead cells
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                const idx = getIndex(row, col, this.width);

                if (cells[idx] !== Cell.Alive) {
                    continue;
                }

                this.ctx.fillRect(
                    col * (CELL_SIZE + 1) + 1,
                    row * (CELL_SIZE + 1) + 1,
                    CELL_SIZE,
                    CELL_SIZE
                );
            }
        }

        this.ctx.stroke();
    }

    drawFps() {
        this.fps.render();
    }

    checkDimensions() {
        if (!this.width || !this.height) {
            throw new Error('Dimensions must be defined before rendering');
        }
    }
}
