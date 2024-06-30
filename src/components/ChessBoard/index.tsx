import React from "react";
import { Board } from "../../models/Board";
import CellComponent from "../Cell";
import './styles.scss'
interface BoardProps {
    board: Board,
    setBoard: () => void
}
const ChessBoard: React.FC<BoardProps> = ({ board, setBoard }) => {
    return (
        <div className="board">
            {board.cells.map((row, ind) => (
                <div className="board__row">
                    {
                        row.map((cell, index) => (
                            <React.Fragment key={index}>
                                <CellComponent cell={cell}>
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