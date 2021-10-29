import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    //teste commit

    //Objetos:
    state = {
        count:0,
        tags: ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold' 
    };

    //Renderer:
    render() { 
        return  (<React.Fragment>
                    <span style={this.styles} className={this.formatBadge()}>{this.formatCount()}</span>
                    <button onClick={(e) => this.handleIncrement(Boolean(true))} className="button btn-success">Increment</button>;
                    <button onClick={(e) => this.handleIncrement(Boolean(false))} className="button btn-danger">Decrement</button>;
                    <ul>
                        {this.state.tags.length === 0 && "No tags found"}
                        {this.renderTags()}
                    </ul>
                </React.Fragment>);
    }

    handleIncrement = (isIncrement) => {
        // this.state.count++; NÃO FUNCIONA, pois o React não sabe que foi alterado!
        if(isIncrement){
            this.setState({ count: this.state.count + 1})
        }
        else{
            this.setState({count: this.state.count - 1 })
        }
        
    };

    //Métodos:
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    formatBadge(){
        let buttonColor = "badge m-2 ";
        buttonColor += (this.state.count === 0) ? "bg-warning" : "bg-primary";
        return buttonColor;
    }

    renderTags(){
        if(this.state.tags.length === 0) return null;

        return <ul>{this.state.tags.map(tag=> <li key={tag}> {tag} </li>)}</ul>
        
        /*
        Observe que, para o JS:
            true && false -> retorna false;
            true && "Hi" -> retorna "hi";
            true && "Hi" && 1 -> retorna 1;
            true && '' -> retorna false;
        */
    
    }
}
 
export default Counter;