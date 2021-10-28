import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    //teste commit

    //Objetos:
    state = {
        count:0
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold' 
    };

    //Renderer:
    render() { 
        return  (<React.Fragment>
                    <span style={this.styles} className={this.formatButton()}>{this.formatCount()}</span>
                    <button className="button btn-seconday">Increment</button>;
                </React.Fragment>);
    }

    //Métodos:
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    formatButton(){
        let buttonColor = "badge m-2 ";
        buttonColor += (this.state.count === 0) ? "bg-warning" : "bg-primary";
        return buttonColor;
    }
}
 
export default Counter;