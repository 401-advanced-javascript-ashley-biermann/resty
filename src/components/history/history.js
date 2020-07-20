/**
 * History
 * @component History
 */

import React from 'react';
// import If from '../if/if.js';
import Modal from '../modal/modal.js';
import JSONPretty from 'react-json-pretty';
import { Redirect } from "react-router-dom";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false,
      redirect: null,
    };
  }

  toggleDetails = (event) => {

    // toggleDetails = (idx) => {
    // let temp = this.state.details;
    // temp[idx] = !temp[idx];
    // this.setState( {details: temp});
    // can be used with IF

    event.preventDefault();
    if (!this.state.details) {
      this.setState({ details: true });
    } else {
      this.setState({ details: false });
    }
  }

  handleReRun = (event) => {
    event.preventDefault();

    // this.setState({ method: method })
    // let method = this.state.method;
    // let url = this.item.url;
    // console.log(method);
    this.props.handler('get', 'https://swapi.dev/api/people');
    this.setState({ redirect: "/" });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div id="historyPage">
        <h1>History</h1>
        <section id="apiCalls">
          <ul>
            {this.props.archive.map((item, idx) => {
              return (
                <li key={idx} id={idx}>

                  <JSONPretty id={idx} onClick={this.toggleDetails} data={item.method + ' ' + item.url}></JSONPretty>

                  {/* <If condition={ this.state.details[idx] === true }> */}

                    <Modal condition={this.state.details}>

                    <p>
                  <JSONPretty data={ item.body }></JSONPretty>
                    </p>
                  </Modal>

                  {/* </If> */}
          <input type="button" id="reRun" value="Re-Run Search" onClick={this.handleReRun} />
                </li>
              );
            })}

          </ul>
        </section >
      </div >
    );
  }
}

export default History;

// Show full details of each search

