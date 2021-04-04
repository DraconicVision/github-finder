import React from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i>
        {title}
        {/* this.props.<PROP-NAME> is how you call a prop in a class based component */}
      </h1>
    </nav>
  );
};

// These are default props. These will be used as a fallback if props are not defined elsewhere.
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};
// This defines what data type is expected and whether the prop type is required or not.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
