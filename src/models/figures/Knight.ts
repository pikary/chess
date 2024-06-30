import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import KnightBlack from '../../assets/black-knight.png'
import KnightWhite from '../../assets/white-knight.png'

export class Knight extends Figure{
    constructor(color:COLORS,cell:Cell){
        super(color,cell)
        this.pic = color === COLORS.WHITE ? KnightWhite : KnightBlack
        this.name = FigureNames.QUEEN
    }
}