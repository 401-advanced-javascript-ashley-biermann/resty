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
          <p>Please Can I Has?? </p>
          <section>
            Wait for it ...
          </section>
        </div>
      );

    } else {

      console.log(this.props.results);
      return (
        <div id="results">
          <p>Count: {this.props.count}</p>
          <section>
            <ul>
              {this.props.results.map((results, idx) => {
                console.log(this.props.results[idx]);
                return (
                  <li key={idx}>
                    {JSON.stringify(results)}
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