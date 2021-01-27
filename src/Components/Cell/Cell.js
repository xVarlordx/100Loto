import React from 'react'
import classes from './Cell.module.scss'


function Cell (props) {

    return (
    <div onClick={() => props.onSelectHandler(props.number)} className={`${classes.Cell} ${props.number.isSelected ? classes.isSelected : '' }`}>
        {props.number.number}
    </div>
    )}

export default Cell