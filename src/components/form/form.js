/**
 * Form
 * @component Form
 */

// TODO: add loading image while awaiting fetch

import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: this.props.method ? this.props.method : 'get',
      value: this.props.url ? this.props.url : '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value }, () => console.log(this.state));
  // }

  async handleSubmit (event) {
    event.preventDefault();

    let restOption = {
      method: this.state.method,
    }

    let response = await fetch(this.state.value, restOption);
    let headers = JSON.stringify(response.headers, null, 2);
    let data = await response.json();
    let results = JSON.stringify(data, null, 2);
    let apiCall = { url: this.state.value, method: this.state.method, body: results }

    this.props.handler(headers, results, apiCall);
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>

          <legend>Enter API URL, and click on desired METHOD</legend>

          <input name="url" id="urlInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="URL" />

          <input name="submit" className="button" id="submitButton" type="submit" value="GO" />
        </form>

        <section id="methods">
          <input name="get" className="button" id="get" onClick={() => this.setState({
            method: 'get',
          })} type="button" value="GET" />

          <input name="post" className="button" id="post" onClick={() => this.setState({
            method: 'post',
          })} type="button" value="POST" />

          <input name="put" className="button" id="put" onClick={() => this.setState({
            method: 'put',
          })} type="button" value="PUT" />

          {/* <input name="patch" className="button" id="patch" onClick={() => this.setState({
            method: 'patch',
          })} type="button" value="PATCH" /> */}

          <input name="delete" className="button" id="delete" onClick={() => this.setState({
            method: 'delete',
          })} type="button" value="DELETE" />
        </section>

        {/* <section id="apiRequest">
          <p>Request: {this.state.method} {this.state.value}</p>
        </section> */}
      </div>
    );
  }
}

export default Form;