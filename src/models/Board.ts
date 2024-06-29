import {Cell} from "./Cell";
import { COLORS } from "./Colors";
// import Figure from "./figures/Figure";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                const isBlack = (i + j) % 2 === 1;
                if (isBlack) {
                    row.push(new Cell(i,j,COLORS.BLACK,null))
                } else {
                    row.push(new Cell(i,j,COLORS.WHITE,null))
                }
            }
            this.cells.push(row)
        }
    }
}
