/** App
 * Serves as the container for all sub-components
 */

// Import and render Header, Footer, and Counter components from other files using ES6 import syntax

import React from 'react';
import './design/design.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      words: 'Default State',
    };

    // we must bind methods (not defined with fat arrow functions to the React.Components "this")
    this.handleStateWords = this.handleStateWords.bind(this);
  }

  handleStateWords(words) {
    this.setState({ words });
  }

  render() {

    console.log(this.state);

    // new React.component({words: 'aiuerhau', handleState: function})
    return (
      <div>
        <Header
          // words={this.state.words}
          // handleState={this.handleStateWords}
        />
        <Form></Form>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;