/**
 * Header
 * @component Header
 */

import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <h1
        // onClick={() => this.props.handleState('state words')}
      >
        Resty ... A Simple ReST Client 
        {/* {this.props.words} */}
      </h1>
    );
  }
}

export default Header;