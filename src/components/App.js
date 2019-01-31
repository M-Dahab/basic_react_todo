import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [],
    newTodo: '',
  }

  onTodoChange = evt => this.setState({ newTodo: evt.target.value })

  addTodo = () => this.setState(currentState => ({ newTodo: '', todos: [...currentState.todos, currentState.newTodo] }))

  deleteTodo = item => this.setState(currentState => ({ todos: currentState.todos.filter(todo => todo !== item ) }))

  render() {
    return (
      <div class="container mx-auto">
        <h1>TODO App!</h1>
        <div>
          <input class="border" value={this.state.newTodo} onChange={this.onTodoChange} />
          <button onClick={this.addTodo}>Add</button>
          <div>
            <ul>
              {
                this.state.todos.map(todo => <li onClick={() => this.deleteTodo(todo)}>{todo}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
