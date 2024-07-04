import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import kingBlack from '../../assets/black-king.png'
import kingWhite from '../../assets/white-king.png'

export class King extends Figure {
    constructor(color: COLORS, cell: Cell) {
        super(color, cell)
        this.pic = color === COLORS.WHITE ? kingWhite : kingBlack
        this.name = FigureNames.KING
    }
    override canMove(targetCell: Cell): boolean {
        if (!super.canMove(targetCell)) {
            return false;
        }

        const dRow = Math.abs(this.cell.row - targetCell.row);
        const dCol = Math.abs(this.cell.col - targetCell.col);

        // King moves exactly one square in any direction
        if ((dRow === 1 && dCol === 0) || // Vertical move
            (dRow === 0 && dCol === 1) || // Horizontal move
            (dRow === 1 && dCol === 1)) { // Diagonal move

            if (this.cell.isCellUnderAttack(targetCell, this.color) === false) return true
        }


        return false;
    }
}