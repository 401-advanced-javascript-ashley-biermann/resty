/** App
 * Serves as the container for all sub-components
 */

import React from 'react';
import './design/design.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headers: '',
      results: '',
    };

    this.handleForm = this.handleForm.bind(this);
  }
// remove count, add headers
  handleForm (headers, results) {
    this.setState({ headers, results });
  }

  render() {
    return (
      <div>
        <Header />
        <Form handler={this.handleForm} />
        <Results headers={this.state.headers} results={this.state.results} />
        <Footer />
      </div>
    );
  }
}

export default App;