import React, {Component} from 'react'
import classes from './Field.module.scss'
import Cell from "../Cell/Cell";

const firstField = 19;
const secondField = 2;
const NumberOfWinNumber = 8;

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            win_number: [],
            firstNumbers: [],
            secondNumbers: [],
        }
    }

    componentDidMount() {
        const firstNumbers = this.generateNumbers([], 99, firstField).map(number => ({number, isSelected: false}));
        const secondNumbers = this.generateNumbers([], 99, secondField).map(number => ({number, isSelected: false}));
        const win_number = this.generateNumbers([], firstField, NumberOfWinNumber);

        this.setState({
            firstNumbers,
            secondNumbers,
            win_number,

        })
    }

    checkNumberOfIsSelected = (arr) => {
        return arr.reduce((sum, current) => {
            if (current.isSelected) {
                sum++;
            }
            return sum;
        }, 0);
    }


    onSelectHandler = (number) => {

        const i = this.checkNumberOfIsSelected(this.state.firstNumbers)

        console.log('.....i', i);

        if (i === 8) {
            return true;
        } else {

            this.setState({
                firstNumbers: this.state.firstNumbers.map(item => {
                    if (item.number === number.number) {
                        item.isSelected = !item.isSelected
                    }
                    return item;
                })
            })
        }

        console.log('.....key', number);

    }

    generateNumbers(arr, max, arrayLenght) {
        if (arr.length < arrayLenght) {

            const random = Math.floor(Math.random() * max);
            if (arr.includes(random)) {
                return this.generateNumbers(arr, max, arrayLenght);
            } else {
                return ((arr.length + 1) < arrayLenght) ? this.generateNumbers([...arr, random], max, arrayLenght) : [...arr, random];
            }

        } else {
            return arr;
        }
    }

    render() {
        const {firstNumbers, secondNumbers} = this.state;

        if (this.props.field === 1) {
            return (
                <div className={classes.Field}>
                    {firstNumbers.map((number, index) => {
                        return (<Cell
                            key={index}
                            number={number}
                            onSelectHandler={this.onSelectHandler}
                        />)
                    })}
                </div>
            )
        } else {
            return (
                <div className={classes.Field}>
                    {secondNumbers.map((number, index) => {
                        return (<Cell
                            key={index}
                            number={number}
                            isSelected={false}
                            onSelectHandler={this.onSelectHandler}
                        />)
                    })}
                </div>
            )
        }
    }
}

export default Field