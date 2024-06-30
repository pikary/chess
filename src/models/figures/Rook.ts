import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import RookBlack from '../../assets/black-rook.png'
import RookWhite from '../../assets/white-rook.png'

export class Rook extends Figure{
    constructor(color:COLORS,cell:Cell){
        super(color,cell)
        this.pic = color === COLORS.WHITE ? RookWhite : RookBlack
        this.name = FigureNames.ROOK
    }
}