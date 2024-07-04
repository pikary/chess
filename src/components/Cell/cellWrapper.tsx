import React, { FC, Fragment } from "react";

//cell wrapper is for cell whre figure can be eaten
const CellWrapper: FC = () => {
    return (
        <Fragment>
            <div className="cell__triangle cell__triangle-top-left"></div>
            <div className="cell__triangle cell__triangle-top-right"></div>
            <div className="cell__triangle cell__triangle-bottom-left"></div>
            <div className="cell__triangle cell__triangle-bottom-right"></div>


        </Fragment>
    )
}

export default CellWrapper