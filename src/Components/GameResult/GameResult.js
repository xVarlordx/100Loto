import React from 'react'
import classes from './GameResult.module.scss'



function GameResult (props) {

    return(
        <div className={classes.GameResult}>
            <h1>Билет 1</h1>
            <p>Ого, вы выйграли! Поздраврялем!</p>
        </div>
    )
}

export default GameResult