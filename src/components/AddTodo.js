import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    //component level state
    state = {
        title: ''
    }

    
    //submit 
    onSubmit = (e) => {
        //(make sure it is not submitted to the actual file)
        e.preventDefault();
        //pass the new item up the prop chain
        this.props.addTodo(this.state.title);
        //clear the field for a new item
        this.setState({ title: '' });

    }

    //could add as many fields as you want by changing e.target.name to e.target.email or whatever as long as it is defined in the input
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    //form to accept input
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name="title" 
                style={{ flex: '10', padding: '5px' }}
                placeholder="Add To Do ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit"
                value="Submit"
                className="btn"
                style={AddToDoStyle}/>
            </form>
        )
    }
}

const AddToDoStyle = { 
    flex: '1',
}

//deifne any prop-types for the class
AddTodo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default AddTodo
