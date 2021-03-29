import React, { Fragment, Component } from 'react';
// Using {} allows us to forget about using React. in-front of the elements within the {}s
import './App.css';

// Components can be functions or classes. This is a class-based component.

class App extends Component {
  example1 = () => 'This is outside of the render() method.';
  // You need to use a method to return the component. A method is a function within a class.
  render() {
    // Render is a lifecycle method. Meaning it runs at a certain point when the component is loading.
    const loading = true;
    return (
      // Everything within here is JSX, it must return as one parent div.
      <Fragment>
        {/* If you don't want to use a div to wrap everything you can use a fragment. <React.Fragment> This is an element in terms of JSX but it does not render into HTML. */}
        {loading ? <h4>Loading...</h4> : <h1>Hello!</h1>}
        <h1>Hello from React!</h1>
        <h2>{3.1 + 2.9}</h2>
        {/* If a something is declared outside of the render() method then you need to use this. to call it. */}
        <h3>{this.example1()}</h3>
      </Fragment>
    );
  }
}
export default App;
