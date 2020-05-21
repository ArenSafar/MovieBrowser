import React from 'react';

import { render } from 'react-dom';

const styles = {
    fontfamily : 'sans-serif',
    textAlign : 'center',

};

const Todo = (props) => (
    <li>
        <input type={'checkbox'} checked={props.todo.checked} onChange={props.onToggle}/>
        <button onClick={props.onDelete}> delete </button>
        <span> {props.todo.text}</span>
    </li>
)

let id = 0
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        }
    }

    addTodo() {
        const text = prompt('what to do?' )
        this.setState({
                todos : [...this.state.todos,
                    {id: id++, text : text, checked: false}, ],
            }
        )
    }
    deleteTodo(id) {
        this.setState({
            todos : this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleCheck(id) {
        this.setState({
            todos : this.state.todos.map( todo => {
                if (todo.id !== id)  return todo
                return {
                    id: todo.id , text: todo.text, checked: !todo.checked
                }
            }
            )
        })
    }

    render()  {
        return (
            <div>
                <div> total items: {this.state.todos.length}</div>
                <div> unchecked items: {this.state.todos.filter(todo => !todo.checked ).length}</div>
                <button onClick={() => this.addTodo()}> Add TODO </button>
                <ul>
                    {this.state.todos.map(todo => <Todo
                            todo = {todo}
                            onDelete = {() => this.deleteTodo(todo.id)}
                            onToggle = {() => this.toggleCheck(todo.id)}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

render(<App /> , document.getElementById('root'))





