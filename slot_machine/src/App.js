import React, {Component} from 'react';
import Machine from "./components/Machine.js";

class App extends Component{
    render() {
        return (
            <div className="App">
                <Machine
                    s1='🍊'
                    s2='🍒'
                    s3='🍍'
                />
                <Machine
                    s1='🍇'
                    s2='🍉'
                    s3='🍋'
                />
                <Machine
                    s1='🍎'
                    s2='🥥'
                    s3='🍑'
                />
            </div>
        );
    }
}

export default App;
