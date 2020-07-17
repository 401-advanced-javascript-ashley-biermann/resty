/**
 * Header
 * @component Header
 */

import React from 'react';
import { NavLink as Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1>
          Resty ... A Simple ReST Client
        </h1>
        <nav>
          <ul>
            <li><Link activeClassName='selected' exact to="/">Home</Link></li>
            <li><Link activeClassName='selected' exact to="/history">History</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;