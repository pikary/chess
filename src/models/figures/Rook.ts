import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import RookBlack from '../../assets/black-rook.png'
import RookWhite from '../../assets/white-rook.png'

export class Rook extends Figure {
    constructor(color: COLORS, cell: Cell) {
        super(color, cell)
        this.pic = color === COLORS.WHITE ? RookWhite : RookBlack
        this.name = FigureNames.ROOK
    }

    canMove(targetCell: Cell): boolean {
        if (super.canMove(targetCell) === false) {
            return false
        }
        if (targetCell.figure && targetCell.figure.color !== this.cell.figure?.color) {
            targetCell.canBeEaten = true
        }
        if (this.cell.isEmptyVertical(targetCell)) {
            return true
        }
        if (this.cell.isEmptyHorizontal(targetCell)) {
            return true
        }

        return false
    }
}