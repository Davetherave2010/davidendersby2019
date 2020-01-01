import React, { Component } from 'react';

import '../styles/components/Header.scss';

class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <header className="header">
        <h1 className="header-title">{this.props.title}</h1>
      </header>
    )
  }
}

export default Header
