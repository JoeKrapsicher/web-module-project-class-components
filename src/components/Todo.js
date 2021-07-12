import React from 'react';

const Todo = props => {
    return (
        // On click toggled specified item to switch its completed state from completed to not, as well as its class to change its color and if it gets strikethough
        <div onClick={() => props.toggleTask(props.item.id)} className={`item${props.item.completed ? `-completed` : ''}`}>
            <p>{props.item.task}</p>
        </div>

    )
}

export default Todo