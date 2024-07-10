import React, { useEffect, useRef, useState } from "react";
import { Board } from "../../models/Board";
import CellComponent from "../Cell";
import './styles.scss'
import { Cell } from "../../models/Cell";

interface BoardProps {
    board: Board,
    setBoard: (newBoard: Board) => void
}
const ChessBoard: React.FC<BoardProps> = ({ board, setBoard }) => {
    const boardRef = useRef<HTMLDivElement | null>(null)
    const selectedFigure = useRef<HTMLImageElement | null>(null)
    const [selectedCell, setSelectedCell] = useState<null | Cell>(null)

    const [isDragging, setIsDragging ]= useState(false)
    const selCell:Cell|null = null

    const onCellSelect = (target: Cell) => {
        try{
            board.clearCellClasses()
            board.highlightDomailCell(target)
            board.highlightCells(target)
            if(selectedCell && selectedCell!==target && selectedCell.figure && selectedCell.figure.color !== target.figure?.color){
                selectedCell.moveFigure(target)
                setSelectedCell(null)
                updateBoard()
            }else if(selectedCell==target){
                setSelectedCell(null)
            }else{
                setSelectedCell(target)
    
            }   
        }catch(e){
            console.error(e)
        }

        //if cell already selected -- move figure
        // if (selectedCell && selectedCell !== target && selectedCell.figure) {
        //     selectedCell.moveFigure(target)
        //     setSelectedCell(null)

        // } else if (selectedCell == target) {
        //     setSelectedCell(null)
        // }

        // else {
        //     //else -- setSelecteFigure
        //     setSelectedCell(target)
        //     // console.log(target);
        // }

    }

    //update board when user selects cells
    const updateBoard = () => {
        const copiedBoard = board.getCopyBoard()
        setBoard(copiedBoard)
    }

    const onDragStart = (e: React.DragEvent<HTMLImageElement>, targetCell: Cell) => {
        setIsDragging(true)
        // setSelectedCell(targetCell) 
        // board.clearCellClasses()
        setSelectedCell(targetCell)
        board.highlightCells(targetCell)
        
        console.log(e.target); 
        const img = new Image();
        img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
        e.dataTransfer.setDragImage(img, 0, 0)
        const dragDiv = document.createElement('img');
        dragDiv.classList.add('dragged-item');
        dragDiv.style.position = 'absolute';
        dragDiv.style.pointerEvents = 'none';
        dragDiv.style.width = `${e.currentTarget.offsetWidth}px`;
        dragDiv.style.height = `${e.currentTarget.offsetHeight}px`;
        dragDiv.src = e.currentTarget.src
        selectedFigure.current = dragDiv
        dragDiv.innerHTML = e.currentTarget.innerHTML
        boardRef.current!.appendChild(dragDiv);

    }

    const onDrag = (e: React.DragEvent<HTMLImageElement>) => {
        
        if (selectedFigure.current && boardRef.current) {
            const boardRect = boardRef.current.getBoundingClientRect();
            selectedFigure.current.style.left = `${e.clientX - boardRect.left - e.currentTarget.offsetWidth / 2}px`;
            selectedFigure.current.style.top = `${e.clientY - boardRect.top - e.currentTarget.offsetHeight / 2}px`;
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>,targetCell:Cell) => {
        e.preventDefault()
        try{
            setIsDragging(false)
            console.log(selCell);
            selectedCell?.moveFigure(targetCell)
            board.clearCellClasses()
            updateBoard()
            if(selectedFigure.current){
                boardRef.current!.removeChild(selectedFigure.current)
                selectedFigure.current = null
            }
        }catch(e){
            console.log(e);
        }finally    {
            setIsDragging(false);
            board.clearCellClasses();
            if (selectedFigure.current) {
                boardRef.current!.removeChild(selectedFigure.current);
                selectedFigure.current = null;
            }
            e.dataTransfer.clearData()
        }
      
        // const id = +e.dataTransfer.getData('text')
    }
    return (
        <div className="board" ref={boardRef}>
            {board.cells.map((row, ind) => (
                <div className="board__row" key={ind}>
                    {
                        row.map((cell, index) => (
                            <React.Fragment key={index}>
                                <CellComponent
                                    id={`${cell.row}-${cell.col}`}
                                    selectedCell={selectedCell}
                                    onCellSelect={() => { onCellSelect(cell) }}
                                    cell={cell}
                                    isDragging={isDragging}
                                    onDrag={onDrag}
                                    onDragStart={onDragStart}
                                    onDragDrop={handleDrop}
                                    onDragOver={handleDragOver}

                                />
                                {/* <img className={classNames('figure')} onClick={() => { onCellSelect(cell) }}  style={{top: 100 * cell.row, left:100*cell.col}} src={cell.figure?.pic}  alt={cell.figure?.name}></img> */}

                            </React.Fragment>
                        ))
                    }
                </div>

            ))}
        </div>
    )
}

export default ChessBoard