import React, { Fragment, Component } from 'react';
// Using {} allows us to forget about using React. in-front of the elements within the {}s
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

// Components can be functions or classes. This is a class-based component.

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <UserItem />
      </Fragment>
    );
  }
}
export default App;
