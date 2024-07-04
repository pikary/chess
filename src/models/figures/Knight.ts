import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import KnightBlack from '../../assets/black-knight.png'
import KnightWhite from '../../assets/white-knight.png'

export class Knight extends Figure {
    constructor(color: COLORS, cell: Cell) {
        super(color, cell)
        this.pic = color === COLORS.WHITE ? KnightWhite : KnightBlack
        this.name = FigureNames.QUEEN
    }

    override canMove(targetCell: Cell): boolean {
        if (!super.canMove(targetCell)) {
            return false
        }
        const dRow = Math.abs(this.cell.row - targetCell.row)
        const dCol = Math.abs(this.cell.col - targetCell.col)
        return (dRow === 1 && dCol === 2) || (dRow === 2 && dCol === 1)
    }
}