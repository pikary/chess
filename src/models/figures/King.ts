import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import kingBlack from '../../assets/black-king.png'
import kingWhite from '../../assets/white-king.png'

export class King extends Figure{
    constructor(color:COLORS,cell:Cell){
        super(color,cell)
        this.pic = color === COLORS.WHITE ? kingWhite : kingBlack
        this.name = FigureNames.KING
    }
}