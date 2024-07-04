import {Cell} from "../Cell";
import pic from '../../assets/black-bishop.png'
import { COLORS } from "../Colors";
import { King } from "./King";

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
        // if(targetCell.figure?.color == this.color){
        //     //огонь по своим
        //     return false
        // }
        if(targetCell.figure?.name == FigureNames.KING){
            return false
        }
        return true
    }
    
    canEat(targetCell:Cell){
        
    }

    //for king -- check if this figure defends targetCell figure which king wants to eat
    isDefending(targetCell:Cell){
        
    }

    moveFigure(target:Cell){
        this.cell = target
    }
    
}
