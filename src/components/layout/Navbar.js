import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // These are default props. These will be used as a fallback if props are not defined elsewhere.
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };
  // This defines what data type is expected and whether the prop type is required or not.
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
          {/* this.props.<PROP-NAME> is how you call a prop in a class based component */}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
