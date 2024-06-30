import React, { ReactNode } from "react";
import classNames from "classnames";
import {Cell} from "../../models/Cell";
import { COLORS } from "../../models/Colors";
import './styles.scss'

interface CellProps {
    cell: Cell,
    children:ReactNode
}

const CellComponent: React.FC<CellProps> = ({ cell,children }) => {
    return (
        <div className={`${classNames('cell', cell.color === COLORS.WHITE ? 'white' : 'black')}`}>
            {children}
        </div>
    )
}

export default CellComponent