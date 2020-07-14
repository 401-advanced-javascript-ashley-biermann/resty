/**
 * Form
 * @class Form
 */

import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      method: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A request was submitted');
    event.preventDefault();
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>

          <legend>Enter API URL, and click on desired METHOD</legend>

          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="URL"></input>

          <button type="submit" value="Submit"><span>Search the API</span></button>

          <section id="methods">
            <button onClick={() => this.setState({
              method: 'GET',
            })} type="radio" value="get"><span>GET</span></button>

            <button onClick={() => this.setState({
              method: 'POST',
            })} type="radio" value="post"><span>POST</span></button>

            <button onClick={() => this.setState({
              method: 'PUT',
            })} type="radio" value="put"><span>PUT</span></button>

            <button onClick={() => this.setState({
              method: 'PATCH',
            })} type="radio" value="patch"><span>PATCH</span></button>

            <button onClick={() => this.setState({
              method: 'DELETE',
            })} type="radio" value="delete"><span>DELETE</span></button>
          </section>
        </form>

        <section id="apiRequest">
          <p>
            {this.state.method} <br></br>
            {this.state.value}
          </p>
        </section>
      </div>
    );
  }
}

export default Form;