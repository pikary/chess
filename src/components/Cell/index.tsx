import React, { ReactNode } from "react";
import CellWrapper from "./cellWrapper";
import classNames from "classnames";
import {Cell} from "../../models/Cell";
import { COLORS } from "../../models/Colors";
import './styles.scss'

interface CellProps {
    cell: Cell,
    selectedCell:Cell|null,
    onCellSelect:()=>void;
    children:ReactNode
}

const CellComponent: React.FC<CellProps> = ({ cell,children,onCellSelect,selectedCell }) => {
    return (
        <div onClick={onCellSelect} className={`${classNames('cell', cell.color === COLORS.WHITE ? 'white' : 'black',selectedCell === cell && 'selected' )}`}>
            {cell.isAvailable && cell.figure === null && <div className="cell-available"></div>}
            {cell.isAvailable && cell.canBeEaten && cell.figure && <CellWrapper></CellWrapper>}
            {children}
        </div>
    )
}

export default CellComponent