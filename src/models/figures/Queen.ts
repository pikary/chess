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
}