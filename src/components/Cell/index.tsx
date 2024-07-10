import React, { ReactNode } from "react";
import CellWrapper from "./cellWrapper";
import classNames from "classnames";
import { Cell } from "../../models/Cell";
import { COLORS } from "../../models/Colors";
import './styles.scss'

interface CellProps {
    id:string,
    cell: Cell,
    selectedCell: Cell | null,
    onCellSelect: () => void;
    isDragging:boolean,
    onDragStart:(e:React.DragEvent<HTMLImageElement>, targetCell:Cell)=>void
    onDrag:(e:React.DragEvent<HTMLImageElement>)=>void,
    onDragOver:(e:React.DragEvent<HTMLDivElement>)=>void,
    onDragDrop:(e:React.DragEvent<HTMLDivElement>, targetCell:Cell)=>void
}

const CellComponent: React.FC<CellProps> = ({id, cell, onCellSelect, selectedCell, isDragging,onDrag,onDragStart, onDragDrop,onDragOver }) => {
    return (
        <div id={id} onDragOver={onDragOver} onDrop={(e)=>{onDragDrop(e,cell)}} onClick={onCellSelect}  className={`${classNames('cell', cell.color === COLORS.WHITE ? 'white' : 'black', selectedCell === cell && 'cell-selected')}`}>
            {/* {cell.isAvailable && cell.figure === null && <div className="cell-available"></div>} */}
            {/* {cell.isAvailable && cell.canBeEaten && cell.figure && <CellWrapper />} */}
            {cell.figure && (
                <img
                    draggable
                    onDrag={onDrag}
                    onDragStart={(e)=>{
                        // e.dataTransfer.setDragImage(new Image(),0,0)
                        // e.stopPropagation()
                        onDragStart(e,cell)
                    }}
                    id={`${cell.row}-${cell.col}`}
                    src={cell.figure?.pic}
                    alt={cell.figure?.name}
                />
            )}
        </div>
    )
}

export default CellComponent