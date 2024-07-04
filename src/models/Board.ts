import { Cell } from "./Cell";
import { COLORS } from "./Colors";
import { Pawn, Bishop, Rook, King, Knight, Queen } from './figures'
// import Figure from "./figures/Figure";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                const isBlack = (i + j) % 2 === 1;
                if (isBlack) {
                    row.push(new Cell(i, j, COLORS.BLACK, this))
                } else {
                    row.push(new Cell(i, j, COLORS.WHITE, this))
                }
            }
            this.cells.push(row)
        }
        this.addFigures()
    }

    getCell(row: number, col: number) {
        return this.cells[row][col]
    }


    public getCopyBoard() {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j]
                target.isAvailable = !!selectedCell?.figure?.canMove(target)
            }
        }
    }
    private addFigures() {
        for (let i = 0; i < 8; i++) {
            new Pawn(COLORS.BLACK, this.getCell(1, i));
            new Pawn(COLORS.WHITE, this.getCell(6, i));
        }
        // Add rooks
        new Rook(COLORS.BLACK, this.getCell(0, 0));
        new Rook(COLORS.BLACK, this.getCell(0, 7));
        new Rook(COLORS.WHITE, this.getCell(7, 0));
        new Rook(COLORS.WHITE, this.getCell(7, 7));

        //   Add knights
        new Knight(COLORS.BLACK, this.getCell(0, 1));
        new Knight(COLORS.BLACK, this.getCell(0, 6));
        new Knight(COLORS.WHITE, this.getCell(7, 1));
        new Knight(COLORS.WHITE, this.getCell(7, 6));

        // Add bishops
        new Bishop(COLORS.BLACK, this.getCell(0, 2));
        new Bishop(COLORS.BLACK, this.getCell(0, 5));
        new Bishop(COLORS.WHITE, this.getCell(7, 2));
        new Bishop(COLORS.WHITE, this.getCell(7, 5));

        // Add queens
        new Queen(COLORS.BLACK, this.getCell(0, 3));
        new Queen(COLORS.WHITE, this.getCell(7, 3));

        // Add kings
        new King(COLORS.BLACK, this.getCell(0, 4));
        new King(COLORS.WHITE, this.getCell(7, 4));

    }


}
