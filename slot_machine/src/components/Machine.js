import React, {Component} from "react";
import '../App.css'

class Machine extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        const {s1, s2, s3} = this.props
        let slots = [];
        let result =[];
        slots.push(s1, s2, s3);
        const colors = {fontSize: '40px'};

        for (let i= 0; i < slots.length; i++){
            let item = slots[Math.floor(Math.random() * slots.length)];
             result.push(item);
        }

        let winner = (result[0] === result[1]) && (result[1] === result[2]);

        return (
            <div className='Machine'>
                <h1>Slot Machines!</h1>
                <p style={colors}>{result}</p>
                <p>{winner ? 'You Win!' : 'You Lose!'}</p>
            </div>
        )
    }
}

export default Machine;
