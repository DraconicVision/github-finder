import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
// Using {} allows us to forget about using React. in-front of the elements within the {}s
import './App.css';

// Components can be functions or classes. This is a class-based component.

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <h1>Hello world!</h1>
      </Fragment>
    );
  }
}
export default App;
