import { COLORS } from "./Colors"
import { Figure } from "./figures/Figure"
import { Board } from "./Board"
import { Pawn } from "./figures"

export class Cell {
    row: number
    col: number
    readonly color: COLORS
    figure: Figure | null = null
    isAvailable: boolean
    board: Board
    canBeEaten: boolean = false

    constructor(row: number, col: number, color: COLORS, board: Board) {
        this.row = row
        this.col = col
        this.color = color
        this.figure = null
        this.isAvailable = false
        this.board = board
    }

    isEmpty() {
        return this.figure === null
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.col !== target.col) {
            return false
        }
        const min = Math.min(this.row, target.row)
        const max = Math.max(this.row, target.row)

        for (let row = min + 1; row < max; row++) {
            if (this.board.getCell(row, this.col).isEmpty() === false) {
                return false
            }
        }
        return true
    }
    isEmptyDiagonal(target: Cell) {
        const deltaX = Math.abs(target.row - this.row);
        const deltaY = Math.abs(target.col - this.col);
        if (deltaX !== deltaY) {
            return false;
        }
        const xDirection = target.row > this.row ? 1 : -1;
        const yDirection = target.col > this.col ? 1 : -1;
        for (let i = 1; i < deltaX; i++) {
            if (!this.board.getCell(this.row + i * xDirection, this.col + i * yDirection).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyHorizontal(target: Cell) {
        if (this.row !== target.row) {
            return false
        }
        const min = Math.min(this.col, target.col)
        const max = Math.max(this.col, target.col)

        for (let col = min + 1; col < max; col++) {
            if (this.board.getCell(target.row, col).isEmpty() === false) {
                return false
            }
        }
        return true
    }

    moveFigure(target: Cell) {

        if (this.figure?.canMove(target) && this.figure.color !== target.figure?.color) {
            const tempFigure = this.figure
            target.figure = tempFigure
            this.figure.moveFigure(target)
            this.figure = null
        } else {
            throw new Error('Cant move here')
        }

    }

    //domainCell -- клетки на которые потенциально пойти король
    isCellUnderAttack(targetCell: Cell, color: COLORS) {
        const allCells = this.board.cells
        for (let row = 0; row < allCells.length; row++) {
            for (let col = 0; col < allCells[row].length; col++) {
                const currentCell = this.board.getCell(row, col)
                if (currentCell.figure && currentCell.figure.color !== color) {
                    //if figure is pawn check a little bit different
                    if (currentCell.figure instanceof Pawn) {
                        if (currentCell.figure.isAttackingCell(targetCell)) {
                            return true
                        }
                    } else {
                        if (currentCell.figure.canMove(targetCell)) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }
}
