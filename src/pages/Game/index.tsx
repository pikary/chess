import React, { useState, useEffect } from "react";
import ChessBoard from "../../components/ChessBoard";
import {Board} from "../../models/Board";

export default function Game() {
    const [board, setBoard] = useState<null | Board>()
    useEffect(() => {
        const drawBoard = () => {
            const newBoard = new Board()
            newBoard.initCells()
            setBoard(newBoard)
        }
        drawBoard()
    }, [])
    const updateBoard = (newBoard:Board) =>{
        setBoard(newBoard)
    }
    return (
        <div>
            {board &&
                <ChessBoard board={board} setBoard={updateBoard}></ChessBoard>
            }
        </div>
    )
}