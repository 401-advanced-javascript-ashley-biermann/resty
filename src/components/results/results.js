/**
 * Results
 * @component Results
 */

import React from 'react';

class Results extends React.Component {

  render() {

    if (!Object.keys(this.props.results).length) {

      return (
        <div id="results">
          <p>Please Can I has?? </p>
          <section>
            Not yet....
          </section>
        </div>
      );

    } else {

      return (
        <div id="results">
          <p>Count: {this.props.count}</p>
          <section>
            <ul>
              {Object.keys(this.props.results).map((results, idx) => {
                return (
                  <li key={idx}>
                    <a href={this.props.results[results]}>{results}</a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      );
    }
  }
}


export default Results;

// Expects the count, headers, results to be sent in as props
// Renders the count
// Renders the Result Headers as “pretty” JSON
// Renders the Result Body as “pretty” JSON