import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import PawnBlack from '../../assets/black-pawn.png'
import PawnWhite from '../../assets/white-pawn.png'

const BLACK_PAWN_LINE = 2
const WHITE_PAWN_LINE = 6


export class Pawn extends Figure {
    constructor(color: COLORS, cell: Cell) {
        super(color, cell)
        this.pic = color === COLORS.WHITE ? PawnWhite : PawnBlack
        this.name = FigureNames.PAWN
    }

    override canMove(targetCell: Cell): boolean {
        const DIRECTION = this.color === COLORS.WHITE ? -1 : 1; // Direction is reversed for white
        const START_ROW = this.color === COLORS.WHITE ? 6 : 1;

        const dRow = targetCell.row - this.cell.row;
        const dCol = Math.abs(this.cell.col - targetCell.col);

        // Capture move (diagonal)
        if (dRow === DIRECTION && dCol === 1 && !targetCell.isEmpty() && targetCell.figure!.color !== this.color) {
            console.log('can eat');
            targetCell.canBeEaten = true;
            return true;
        }

        // Normal move (one or two squares forward)
        if (this.cell.col === targetCell.col) {
            if (
                this.cell.row === START_ROW &&
                dRow === 2 * DIRECTION &&
                targetCell.isEmpty() &&
                this.cell.board.getCell(this.cell.row + DIRECTION, this.cell.col).isEmpty()
            ) {
                return true;
            }
            if (dRow === DIRECTION && targetCell.isEmpty()) {
                return true;
            }
        }

        return false;
    }



    //here targetCell is a cell where king stands
    isAttackingKing(targetCell: Cell) {
        const DIRECTION = this.color === COLORS.WHITE ? -1 : 1; // Direction is reversed for white
        const START_ROW = this.color === COLORS.WHITE ? 6 : 1;

        const dRow = targetCell.row - this.cell.row;
        const dCol = Math.abs(this.cell.col - targetCell.col);

        // Capture move (diagonal)
        if (dRow === DIRECTION && dCol === 1 && targetCell.figure?.color !== this.color) {
            return true;
        }
        return false
    }
}