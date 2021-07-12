import React from 'react';
import "./components/Todo.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


// The default data, its gonna be the heart of our application

const allTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component { // Right here we are extending the the base component 'Component'

  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      allTasks: allTasks
    }
  }

  // toggleTask is meant to look over our data and any item that need to be toggled completed or not

  toggleTask = taskId => {
    console.log("Toggling task", taskId)
    //map over the todolist array
    //when we find the one clicked, toggle its completed flag
    const updatedTasks = this.state.allTasks.map(item => {
      if (taskId === item.id) {
        return {...item, completed: !item.completed}
      }
      return item;
    });

    console.log("updated groceries array", updatedTasks)

    // now that we created all the updated tasks we have to merge that data back into state

    this.setState({
      ...this.state,
      allTasks: updatedTasks
    });
  }

  //this function is gonna be prop drilled into TodoForm, the point of this function is to create a new item from list and have it's default 
  //properties be given with names of, taskName: users input, id: Date.now() time id, and default completed to false

  handleAddEvent = taskName => {
    this.setState({
      ...this.state,
      allTasks: [...this.state.allTasks, 
      {
        task: taskName,
        id: Date.now(),
        completed: false
      }]
    })
  }

  // this function's purpose is to clear already completed tasks and removing them from state. 

  clearCompleted = e =>{
    console.log("Completed", allTasks)
    //filter all items completed: true
    e.preventDefault();
    this.setState({
      ...this.state,
      
      // deconstructing: allTasks become allTasks without items that arent completed

      allTasks: this.state.allTasks.filter(item => !item.completed)
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1> 
          <TodoForm handleAddEvent={this.handleAddEvent}/>
        </div>
          <TodoList clearCompleted={this.clearCompleted} toggleTask={this.toggleTask} allTasks={this.state.allTasks}/>
      </div>
    );
  }
}

export default App;
