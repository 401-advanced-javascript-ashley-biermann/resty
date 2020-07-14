/** App
 * Serves as the container for all sub-components
 */

import React from 'react';
import './design/design.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;