import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false, curValue: this.props.pass.todo };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleEdit() {
    this.setState({ isEditing: true });
  }
  handleDelete() {
    this.props.remove(this.props.pass.id);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleUpdate() {
    this.props.update(this.props.pass.id, this.state.curValue);
    this.setState({ isEditing: false });
  }
  handleClick() {
    this.props.click(this.props.pass.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="TodoForm">
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.curValue}
              name="curValue"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div style={{ display: 'flex' }}>
          <li
            className={this.props.pass.isCompleted ? 'completed Todo' : 'Todo'}
            onClick={this.handleClick}
          >
            {this.props.pass.todo}
          </li>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
