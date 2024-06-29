import React from "react";
import {Board} from "../../models/Board";
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
                                <CellComponent cell={cell} ></CellComponent>
                            </React.Fragment>
                        ))
                    }
                </div>

            ))}
        </div>
    )
}

export default ChessBoard