import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    //teste commit

    //Objetos:
    state = {
        value: this.props.value,
        tags: ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize: 13,
        fontWeight: 'bold' 
    };

    //Renderer:
    render() { 
        return  (<React.Fragment>
                    {this.props.children}
                    <span style={this.styles} className={this.formatBadge()}>{this.formatCount()}</span>
                    <button onClick={(e) => this.handleIncrement({increment : true})} className="button btn-success">Increment</button>;
                    <button onClick={(e) => this.handleIncrement({increment: false})} className="button btn-danger">Decrement</button>;
                    <ul>
                        {this.state.tags.length === 0 && "No tags found"}
                        {this.renderTags()}
                    </ul>
                </React.Fragment>);
    }

    handleIncrement = (isIncrement) => {
        // this.state.count++; NÃO FUNCIONA, pois o React não sabe que foi alterado!
        if(isIncrement.increment){
            this.setState({ value: this.state.value + 1})
        }   
        else{
            this.setState({value: this.state.value - 1 })
        }
        
    };

    //Métodos:
    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    formatBadge(){
        let buttonColor = "badge m-2 ";
        buttonColor += (this.state.value === 0) ? "bg-warning" : "bg-primary";
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