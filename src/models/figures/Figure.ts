import {Cell} from "../Cell";
import pic from '../../assets/black-bishop.png'
import { COLORS } from "../Colors";

export enum FigureNames{
    FIGURE='FIGURE',
    PAWN='PAWN',
    BISHOP='BISHOP',
    KNIGHT='KNIGHT',
    QUEEN='QUEEN',
    KING='KING',
    ROOK='ROOK' 
}

export class Figure{
    pic: typeof pic | undefined
    cell:Cell 
    name:FigureNames
    id:number
    color:COLORS


    constructor(color:COLORS,cell:Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.name =FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(targetCell:Cell){
        return false
    }
    
}
