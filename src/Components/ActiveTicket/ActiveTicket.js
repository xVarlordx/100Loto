import React from 'react'
import classes from './ActiveTicket.module.scss'
import ShowResult from "../ShowResult/ShowResult";
import Field from "../FIeld/Field"



const ActiveTicket = props => (
    <div className={classes.ActiveTicket}>
        <h1>Билет 1</h1>
        <p><span>Поле 1</span>Отметье 8 чисел.</p>
        <Field
            field={1}
        />
        <p><span>Поле 2</span>Отметье 1 число.</p>
        <Field
            field={2}
        />
        <ShowResult
            onWinTicketHandler={props.onWinTicketHandler}
        />
    </div>
)

export default ActiveTicket