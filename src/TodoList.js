import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleOnOff = this.toggleOnOff.bind(this);
  }
  addTodo(item) {
    this.setState({
      todos: [
        ...this.state.todos,
        { todo: item, id: uuid(), isCompleted: false }
      ]
    });
  }
  removeTodo(id) {
    console.log(id);
    let newx = this.state.todos.filter(x => x.id !== id);
    console.log(newx);
    this.setState({ todos: newx });
  }
  updateTodo(id, item) {
    let newtodos = this.state.todos.map(x => {
      if (x.id === id) {
        return { ...x, todo: item };
      }
      return x;
    });
    this.setState({ todos: newtodos });
  }
  toggleOnOff(id) {
    let newtodos = this.state.todos.map(x => {
      if (x.id === id) {
        return { ...x, isCompleted: !x.isCompleted };
      }
      return x;
    });
    this.setState({ todos: newtodos });
  }
  render() {
    let maketodos = this.state.todos.map(x => (
      <Todo
        key={this.state.todos.id}
        pass={x}
        remove={this.removeTodo}
        update={this.updateTodo}
        click={this.toggleOnOff}
      />
    ));
    return (
      <div className="TodoList">
        <section>Todo List!</section>
        <p>A Simple React Todo List App.</p>
        <hr />
        <ul style={{ margin: '0', padding: '0' }}>{maketodos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
