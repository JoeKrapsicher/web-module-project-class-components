import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state ={
            newTask: ''
        }
    }

    updateChange =(e) => {
        this.setState({
            ...this.state,
             newTask: e.target.value
        })
    }
    
    submitTask = e => {
        e.preventDefault();
        this.props.handleAddEvent(this.state.newTask)
        this.setState({
            ...this.state,
            newTask: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitTask}>
                    
                    <input value={this.state.newTask} onChange={this.updateChange} type="text" name="task"></input>
                    <button >Add Item</button>
                </form>
            </div>
        )
    }


}

export default TodoForm;