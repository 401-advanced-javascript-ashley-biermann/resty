/**
 * Form
 * @component Form
 */

import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      method: 'get',
      display: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //   On submit
  // Send the API results back to the <App> using the method sent down in props

  async handleSubmit(event) {
    event.preventDefault();

    let data = await fetch('https://pokeapi.co/api/v2/pokemon');
    let json = await data.json();

    let count =json.count;

    let results = json.results.reduce((list, pokemon) => {
      list[pokemon.name] = pokemon.url;
      return list;
    }, {});
    console.log(count);
    console.log(results);
    this.props.handler(count, results);

    // this.setState({ display: this.state.method + '   ' + this.state.value });
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}> 

          <legend>Enter API URL, and click on desired METHOD</legend>

          <input id="urlInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="URL"></input>

          <input className="button" id="submitButton" type="submit" value="GO"></input>
        </form>

        <section id="methods">
          <input className="button" id="get" onClick={() => this.setState({
            method: 'get',
          })} type="button" value="GET"></input>

          <input className="button" id="post" onClick={() => this.setState({
            method: 'post',
          })} type="button" value="POST"></input>

          <input className="button" id="put" onClick={() => this.setState({
            method: 'put',
          })} type="button" value="PUT"></input>

          <input className="button" id="patch" onClick={() => this.setState({
            method: 'patch',
          })} type="button" value="PATCH"></input>

          <input className="button" id="delete" onClick={() => this.setState({
            method: 'delete',
          })} type="button" value="DELETE"></input>
        </section>

        <section id="apiRequest">
          <p>Request: {this.state.display}</p>
        </section>
      </div>
    );
  }
}

export default Form;