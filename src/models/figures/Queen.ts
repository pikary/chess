import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import QueenBlack from '../../assets/black-queen.png'
import QueenWhite from '../../assets/white-queen.png'

export class Queen extends Figure{
    constructor(color:COLORS,cell:Cell){
        super(color,cell)
        this.pic = color === COLORS.WHITE ? QueenWhite : QueenBlack
        this.name = FigureNames.QUEEN
    }


    canMove(targetCell: Cell): boolean {
        if(super.canMove(targetCell)===false){
            // console.log('cant');
            return false
        }
        if(this.cell.isEmptyVertical(targetCell)){
            return true
        }
        if(this.cell.isEmptyHorizontal(targetCell)){
            return true
        }
        if(this.cell.isEmptyDiagonal(targetCell)){
            return true
        }
        return false
    }
}