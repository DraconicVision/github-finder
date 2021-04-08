import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
  };
  onChange = (e) => {
    // This is setting text state to whatever the user types in, this is accessed using e.target
    this.setState({ text: e.target.value });
  };
  onSubmit = (e) => {
    // preventDefault() is preventing the default onSubmit for regular JS which is to write to a file.
    e.preventDefault();
    // This is is setting the text state as a prop that can be used in other components. This will be used within App.js, so it is sending the prop up the component tree.
    this.props.searchUsers(this.state.text);
    // All this does is clear the text state
    this.setState({ text: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            // This is setting the value of the input field to the text state.
            value={this.state.text}
            // In React to allow users to type within an input field you need to set an onChange
            onChange={this.onChange}
          ></input>
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          ></input>
        </form>
        <button
          className='btn btn-light btn-block'
          // This sends the clearUsers prop up the component tree. This is what's known as prop drilling.
          onClick={this.props.clearUsers}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default Search;
