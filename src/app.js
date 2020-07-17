/** App
 * Serves as the container for all sub-components
 */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './design/design.scss';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';
import History from './components/history/history.js';
import Header from './components/header/header.js';
import Results from './components/results/results.js';

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
  handleForm(headers, results) {
    this.setState({ headers, results });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />

          <Route exact path="/">
            <Form handler={this.handleForm} />
            <Results headers={this.state.headers} results={this.state.results} />
          </Route>

          <Route exact path="/history"><History /></Route>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;