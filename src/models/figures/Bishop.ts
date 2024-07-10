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
        const cell = document.getElementById(`${targetCell.row}-${targetCell.col}`)

        if (super.canMove(targetCell) === false) {
            return false
        }
        if (this.cell.isEmptyDiagonal(targetCell)) {
            if (targetCell.figure == null) {
                cell?.classList.add('cell-available')
            }
            if (targetCell.figure && targetCell.figure.color !== this.cell.figure?.color) {
                cell?.classList.add('cell-canbeeaten')
                targetCell.canBeEaten = true
            }
            return true
        }
        cell?.classList.remove('cell-available')
        cell?.classList.remove('cell-canbeeaten')
        return false
    }
}