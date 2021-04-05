import React from 'react';
import PropTypes from 'prop-types';

// This is a functional component, the component is a function rather than a class. Functional components do not require render()
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        // Inline style within JSX requires double {} as well as ''s around the style value.
        style={{ width: '60px' }}
      ></img>
      <h3>{login}</h3>
      <div>
        <a
          target='_blank'
          rel='noreferrer'
          href={html_url}
          className='btn btn-dark btn-sm my-1'
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
