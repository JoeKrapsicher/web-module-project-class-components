// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

const TodoList = props => {
    // for sorting the list based on whether an item has been purchased or not
    // const sortedList = props.allTasks.sort((a, b) => a.purchased - b.purchased);
    return(
        <div className="task-list">
            <div>
                {props.allTasks.map(item => { return(
                    <Todo toggleTask={props.toggleTask} key={item.id} item={item}/>
                )})}
            </div>
            <button onClick={props.clearCompleted} className="clear-btn">
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList