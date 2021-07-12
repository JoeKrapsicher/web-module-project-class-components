import React from 'react';

// to create another item we had to save it in another state component

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state ={
            newTask: ''
        }
    }

    // handles change to type in the text box
    updateChange =(e) => {
        this.setState({
            ...this.state,
             newTask: e.target.value
        })
    }
    
    // submit function, hands the information from newTask to handleAddEvent where it creates an new item, and then clears textbox
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