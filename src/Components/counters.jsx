import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state={
        counters: [
            {id: 1, value: 4, },
            {id: 2, value: 0, },
            {id: 3, value: 0, },
            {id: 4, value: 0, }
        ]
    };
    
    render() { 
        // <h4> é Children de <Counter></Counter>
        return (
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} onDelete={this.handleDeleteCounter} counter={counter}>
                        <h4>Counter #{counter.id}</h4>
                    </Counter> )}
            </div>
        );
    }

    handleDeleteCounter = (counterId) =>{
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: newCounters});
    }
}
 
  export default Counters ;