import React, { Component } from 'react'
//validations for properties that a component should have
import PropTypes from 'prop-types';

//rce + tab to create a scaffold
export class TodoItem extends Component {
    //style todo items
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        //destructure, pull out the variables we may need
        //send markComplete up the prop chain
        //send delete button up the prop chain
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> 
                    { ' ' }
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//deifne any prop-types for the class
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '20%',
    cursor: 'pointer',
    float: 'right'

}

//deifne any prop-types for the class
TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default TodoItem
