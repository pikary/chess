import React from "react";
import classNames from "classnames";
import {Cell} from "../../models/Cell";
import { COLORS } from "../../models/Colors";
import './styles.scss'

interface CellProps {
    cell: Cell
}

const CellComponent: React.FC<CellProps> = ({ cell }) => {
    return (
        <div className={`${classNames('cell', cell.color === COLORS.WHITE ? 'white' : 'black')}`}></div>
    )
}

export default CellComponent