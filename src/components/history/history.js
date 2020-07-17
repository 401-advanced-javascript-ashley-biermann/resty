/**
 * History
 * @component History
 */

import React from 'react';
import If from '../if/if.js';
import JSONPretty from 'react-json-pretty';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false,
    }
  }

  toggleDetails = (event) => {
    event.preventDefault();
    console.log('toggling details');
    if (!this.state.details) {
      this.setState({ details: true });
    } else {
      this.setState({ details: false });
    }
  }

  handleReRun = (event) => {
    // TODO:
  // Add a button to each to re-run the search
  // Redirect to the home page to show the results
    event.preventDefault();
    console.log('handling rerun');
  }

  render() {
    return (
      <div id="historyPage">
        <h1>History</h1>
        <section id="apiCalls">
          <ul>
            {this.props.archive.map((item, idx) => {
              return (
                <li key={idx} >
                  <JSONPretty id="json-pretty" onClick={this.toggleDetails} data={ item.method + ' ' + item.url }></JSONPretty>
                  <If condition={this.state.details}>
                  <p>
                  <JSONPretty id="json-pretty" data={ item.body }></JSONPretty>
                  </p>
                  <input type="button" id="reRun" value="Re-Run Search" onClick={this.handleReRun} />
                  </If>
                </li>
              );
            })}

          </ul>
        </section>
      </div>
    );
  }
}

export default History;

// Show full details of each search

