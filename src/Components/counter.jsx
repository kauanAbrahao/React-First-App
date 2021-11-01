import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    //teste commit

    //Objetos:
    //Lembrando: Atributos dentro de state são EXCLUSIVOS do Component.
    //Atributos herdados do props são READ ONLY.
    state = {
        value: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize: 13,
        fontWeight: 'bold' 
    };

    //Renderer:
    render() { 
        return  (<div>
                    {this.props.children}
                    <span style={this.styles} className={this.formatBadge()}>{this.formatCount()}</span>
                    <button onClick={(e) => this.handleIncrement({increment : true})} className="button btn-success btn-sm">Increment</button>
                    <button onClick={(e) => this.handleIncrement({increment: false})} className="button btn-dark btn-sm m-1">Decrement</button>
                    <button onClick={(e) => this.handleDelete()} className="btn btn-danger btn-sm m-2">Delete</button>
                    <button onClick={(e) => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete Counter</button>
                    <ul>
                        {this.state.tags.length === 0 && "No tags found"}
                        {this.renderTags()}
                    </ul>
                </div>);
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

    handleDelete (){
        console.log("click");
        this.setState({value: 0})
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