import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import bishopBlack from '../../assets/black-bishop.png'
import bishopWhite from '../../assets/white-bishop.png'

export class Bishop extends Figure {
    constructor(color: COLORS, cell: Cell) {
        super(color, cell)
        this.pic = color === COLORS.WHITE ? bishopWhite : bishopBlack
        this.name = FigureNames.BISHOP
    }

    canMove(targetCell: Cell): boolean {
        if (super.canMove(targetCell) === false) {
            return false
        }
        if (this.cell.isEmptyDiagonal(targetCell)) {
            return true
        }

        return false
    }
}