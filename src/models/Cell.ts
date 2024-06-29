import { COLORS } from "./Colors"
import {Figure} from "./figures/Figure"


export class Cell {
    x: number
    y: number
    readonly color: COLORS
    figure: Figure | null = null


    constructor(x:number, y:number, color:COLORS, figure:Figure|null) {
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
    }
}
