import React, {PropTypes} from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
          <h1 className="brand-title">FRONTEND<br />AWESOME</h1>
          <h2 className="brand-tagline">Consuming your API since your Momma was just kneee high to a grasshopper!</h2>
          <nav className="nav">
              <ul className="nav-list">
                  <li className="nav-item">
                      <a className="pure-button" href="http://purecss.io">Pure</a>
                  </li>
                  <li className="nav-item">
                      <a className="pure-button" href="http://yuilibrary.com">YUI Library</a>
                  </li>
              </ul>
          </nav>
      </div>
    );
  }
}

Header.propTypes = {
};
