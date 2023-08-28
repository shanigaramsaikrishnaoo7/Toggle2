import { Component } from "react";
import './index.css'

class Counter extends Component {
    state = {count: 0}
    increase = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    decrease = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    }
    render() {
        const {count} = this.state
       return(
        <div className="container">
            <h1>Counter {count}</h1>
            <button className="inc" onClick={this.increase}>Increase</button>
            <button className="dec" onClick={this.decrease}>Decrease</button>
        </div>
       )
    }
}

export default Counter