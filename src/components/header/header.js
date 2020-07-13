// From class code

import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <h1
        onClick={() => this.props.handleState('state words')}
      >
        My First React Component {this.props.words}
      </h1>
    );
  }
}

export default Header;