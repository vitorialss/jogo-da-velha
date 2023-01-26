import React from "react"
import RowButton from "./assets/styles/rowButton";

function Square ({value, onClick}) {
    return (
        <RowButton onClick={onClick}>
            {value}
        </RowButton>
    )
}
export default Square;