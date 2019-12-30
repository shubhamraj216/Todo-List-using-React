import React, { Component } from 'react';
import './NewTodoForm.css';
class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newtodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.newtodo);
    this.setState({ newtodo: '' });
  }

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <label
            htmlFor="newtodo"
            style={{ fontWeight: '400', fontSize: '30px' }}
          >
            New Todo
          </label>
          <br />
          <input
            id="newtodo"
            type="text"
            name="newtodo"
            className="inpbut"
            value={this.state.newtodo}
            onChange={this.handleChange}
            placeholder="NEW TODO"
          />
          <button className="inpbut">ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
