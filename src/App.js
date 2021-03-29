import React, { Component } from 'react';
// Doing this ^ rather than the below means that on line 7 I can just do 'Component' rather than React.Component
// import React, from 'react';
import './App.css';

// Components can be functions or classes. This is a class-based component.

class App extends Component {
  // You need to use a method to return the component. A method is a function within a class.
  render() {
    // Render is a lifecycle method. Meaning it runs at a certain point when the component is loading.
    return (
      <div className='App'>
        <h1>Hello from React!</h1>
      </div>
    );
  }
}

export default App;
