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
      history: [],
      archive: [],
    };

    this.handleForm = this.handleForm.bind(this);
    this.getHistory = this.getHistory.bind(this);
  }

  handleForm(headers, results, apiCall) {
    this.setState({ headers, results });
    this.state.history.push(apiCall);
    localStorage.setItem('history', JSON.stringify(this.state.history));
    this.getHistory();
  }
  
  async getHistory() {
    let history = await JSON.parse(localStorage.getItem('history'));
    this.setState({ archive: history });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />

          <Route exact path="/">
            <Form handler={this.handleForm} />
            <Results headers={this.state.headers} results={this.state.results} archive={this.state.archive}/>
          </Route>

          <Route exact path="/history">
            <History archive={this.state.archive}/>
          </Route>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;