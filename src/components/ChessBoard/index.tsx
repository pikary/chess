import React, { useEffect, useState } from "react";
import { Board } from "../../models/Board";
import CellComponent from "../Cell";
import './styles.scss'
import { Cell } from "../../models/Cell";
interface BoardProps {
    board: Board,
    setBoard: (newBoard:Board) => void
}
const ChessBoard: React.FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<null|Cell>(null)
    const onCellSelect = (target:Cell) =>{

        //if cell already selected -- move figure
        if(selectedCell && selectedCell !== target && selectedCell.figure){
            // console.log('ayo');
            selectedCell.moveFigure(target)
            setSelectedCell(null)
        }else{
            //else -- setSelecteFigure
            setSelectedCell(target)
            // console.log(target);
        }
        
    }


    //update board when user selects cells
    const updateBoard = ()=>{
        const copiedBoard = board.getCopyBoard()
        setBoard(copiedBoard)
    }
    useEffect(()=>{        
        console.log(selectedCell);
        
            board.highlightCells(selectedCell)
        updateBoard()
    },[selectedCell])
    return (
        <div className="board">
            {board.cells.map((row, ind) => (
                <div className="board__row">
                    {
                        row.map((cell, index) => (
                            <React.Fragment key={index}>
                                <CellComponent selectedCell={selectedCell} onCellSelect={()=>{onCellSelect(cell)}} cell={cell}>
                                    
                                    {cell.figure && <img src={cell.figure?.pic} alt={cell.figure.name}></img>}
                                </CellComponent>
                            </React.Fragment>
                        ))
                    }
                </div>

            ))}
        </div>
    )
}

export default ChessBoard