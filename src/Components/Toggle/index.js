import { Component } from "react";

import './index.css'

class Toggle extends Component {
    state = { isToggle: false}

    changeMode = () =>{
        this.setState((prevState) => ({isToggle: !prevState.isToggle}))
    }

    render(){
        const { isToggle } = this.state
        const mode = isToggle ? 'dark-mode' : 'light-mode'
        const btn = isToggle ? 'Light moode' : 'Dark Moode'
        const heading = isToggle ? 'l-mode' : 'd-mode'
        return(
            <div className={`container ${mode}`}>
            <h1  className={`${heading}`}>Click To Change Mode</h1>
            <button onClick={this.changeMode}>{btn}</button>
            </div>
        )
    }
}

export default Toggle