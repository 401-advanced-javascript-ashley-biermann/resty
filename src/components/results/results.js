/**
 * Results
 * @component Results
 */

import React from 'react';
import JSONPretty from 'react-json-pretty';

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

      return (
        <div id="results">
          <section>

            <ul>
              <JSONPretty id="json-pretty" data={this.props.headers}></JSONPretty>
            </ul>
            <ul>
              <JSONPretty id="json-pretty" data={this.props.results}></JSONPretty>
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