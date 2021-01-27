import React, {Component} from 'react'
import classes from './Game.module.scss'
import ActiveTicket from "../../Components/ActiveTicket/ActiveTicket";
import GameResult from "../../Components/GameResult/GameResult";


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isTicketWin: false
        };
    }


    onWinTicketHandler = (props) => {
        this.setState({
            isTicketWin: true
            })
    }

    render() {

        if (this.state.isTicketWin === false) {
            return (
                <div className={classes.Game}>
                    <ActiveTicket
                    onWinTicketHandler={this.onWinTicketHandler}
                    />
                </div>
            )
        } else {
            return (
                <div className={classes.Game}>
                    <GameResult />
                </div>
            )
        }
    }
}

export default Game