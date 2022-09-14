import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    Increment(){
        this.setState({
                counter: this.state.counter+1
        });
    }

    Decrement(){
        if(this.state.counter > 0)
        {
            this.setState({
                counter: this.state.counter-1
             });
         }
         else {
            alert("Sorry, Can not perform this operation")
         }

    }

    Reset(){
        this.setState({
                counter: this.state.counter=0
        });
    }

    changemessage(){
        this.setState({
            message: "Its Working"
        });
    }

    render() {
        return (
            <div>
                <h1 className="heading-one"><u><b>React Counter App</b></u></h1>
                <p>This is a Counter to help you to count.</p>
                <h2 className="heading-two">{this.state.counter}</h2>
                <button className="button-one" onClick={() => this.Increment()}>Increment</button>
                <br></br>
                <button className="button-two" onClick={() => this.Decrement()}>Decrement</button>
                <br></br>
                <button className="button-three" onClick={() => this.Reset()}>Reset</button>
            </div>
            
        );
    }
}



export default Counter;