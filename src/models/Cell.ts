import { COLORS } from "./Colors"
import {Figure} from "./figures/Figure"
import { Board } from "./Board"

export class Cell {
    x: number
    y: number
    readonly color: COLORS
    figure: Figure | null = null
    isAvailable:boolean 
    board:Board


    constructor(x:number, y:number, color:COLORS, board:Board) {
        this.x = x
        this.y = y
        this.color = color
        this.figure = null
        this.isAvailable = false
        this.board = board
    }

    isEmpty(){
       return this.figure === null 
    }
    canMoveHorizontal(target:Cell){
        if(this.y !== target.y){
            return false
        }
        const min = Math.min(target.y, this.y)
        const max = Math.max(target.y, this.y)

        for(let x = min+1; x < max ; x++){
            if(!this.board.getCell(x, this.y).isEmpty()){
                
            }
        }
    }
}
