/**
 * Results
 * @component Results
 */

// TODO: populate details in the state (method and url) and also in the url bar when user clicks on link in short history onClick={this.populate?}

import React from 'react';
import If from '../if/if.js';
import JSONPretty from 'react-json-pretty';

class Results extends React.Component {

  render() {
    return (
      <div id="results">
        <section id="shortHistory">
          <ul>
            {this.props.archive.map((item, idx) => {
              return (
                <li key={idx} >
                  <JSONPretty id="json-pretty" data={item.method + ' ' + item.url}></JSONPretty>
                </li>
              );
            })}
          </ul>
        </section>

        <If condition={this.props.results}>
          <section id="currentResults">
            <ul>
              <JSONPretty id="json-pretty" data={this.props.headers}></JSONPretty>
            </ul>
            <ul>
              <JSONPretty id="json-pretty" data={this.props.results}></JSONPretty>
            </ul>
          </section>
        </If>
      </div>
    );
  }
}

export default Results;
