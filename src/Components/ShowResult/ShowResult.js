import React from 'react'
import classes from './ShowResult.module.scss'



function ShowResult (props) {

    return(
    <div>
        <button onClick={props.onWinTicketHandler} className={classes.showResult}>Показать результат</button>
    </div>
    )
}

export default ShowResult