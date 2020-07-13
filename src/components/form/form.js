// accept user input for a URL and store it in state
// allow the user to choose amethod and store it in state - this can be done with radio buttons or clickable elements
// display the  user's choices on screen in  a separate <div> or <section> under the form

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
    event.preventDefault();
  }

  render() {
    return (
      <div id="formIntake">
        <form onSubmit={this.handleSubmit}>

          <legend>Enter API URL, and click on desired METHOD</legend>

          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="URL"></input>

          <button type="radio" value="Submit">Search the API</button>
        </form>

        <section id="methods">
          <button onClick={() => this.setState({
            method: 'get',
          })} type="radio" name="method" value="get"><span>GET</span></button>

          <button onClick={() => this.setState({
            method: 'post',
          })} type="radio" name="method" value="post"><span>POST</span></button>

          <button onClick={() => this.setState({
            method: 'put',
          })} type="radio" name="method" value="put"><span>PUT</span></button>

          <button onClick={() => this.setState({
            method: 'patch',
          })} type="radio" name="method" value="patch"><span>PATCH</span></button>

          <button onClick={() => this.setState({
            method: 'delete',
          })} type="radio" name="method" value="delete"><span>DELETE</span></button>
        </section>

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