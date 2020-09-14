import React, {Component} from 'react';
import TodoItem from './TodoItem';
//validations for properties that a component should have
import PropTypes from 'prop-types';


//this is the same as 'class App extends Component {}'
class Todos extends Component 
{
    

    render()
    {
        //console.log(this.props.todos);

        //lifecycle method
        //loop through all todo items and display them,
        //change state of input by using this.markComplete
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

//deifne any prop-types for the class
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default Todos;
