import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };
  onChange = (e) => {
    // This is setting text state to whatever the user types in, this is accessed using e.target
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <form className='form'>
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
      </div>
    );
  }
}

export default Search;
