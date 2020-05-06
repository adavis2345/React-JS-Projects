import React, {Component} from "react";
import Die from "./Die";
import '../RollDice.css'

class RollDice extends Component{
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state={
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
    }

    roll = () =>{
        //pick 2 new rolls
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
            ];

        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
            ];
        //set state with new rolls
        this.setState({
            die1: newDie1,
            die2: newDie2,
            isRolling: true
        })
        //wait one sec set isRolling to false
        setTimeout(() => {
            this.setState({isRolling: false})
        }, 1000)
    };

    render() {
        return(
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Roll Dice"}
                </button>
            </div>
        )
    }
}

export default RollDice
