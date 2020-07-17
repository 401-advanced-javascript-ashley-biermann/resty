/**
 * History
 * @component History
 */

import React from 'react';

class History extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div id="historyPage">
        <h1>HISTORY PAGE</h1>
        <section id="apiCalls">
          <ul>
            <h2>Previously Made API Calls</h2>
            <li>Sample API call</li>
            <li>Sample API call</li>
          </ul>
        </section>
        <input type="button" id="historySubmit" value="Re-Run Search" onClick={this.handleSubmit} />
        <section id="fullQueryDetails">
          <li>query details</li>
        </section>
      </div>
    );
  }
}

export default History;

// Create a new <History/> page component that will:
// Show a list of URLs you’ve loaded before
// Show full details of each search
// Add a button to each to re-run the search
// Redirect to the home page to show the results
