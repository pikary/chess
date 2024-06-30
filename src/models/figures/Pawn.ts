import { Cell } from "../Cell";
import { COLORS } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import PawnBlack from '../../assets/black-pawn.png'
import PawnWhite from '../../assets/white-pawn.png'

export class Pawn extends Figure{
    constructor(color:COLORS,cell:Cell){
        super(color,cell)
        this.pic = color === COLORS.WHITE ? PawnWhite : PawnBlack
        this.name = FigureNames.PAWN
    }
}