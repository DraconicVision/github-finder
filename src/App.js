import React, { Fragment, Component } from 'react';
// Using {} allows us to forget about using React. in-front of the elements within the {}s.
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

// Components can be functions or classes. This is a class-based component.

class App extends Component {
  state = {
    users: [],
    // Once the componentDidMount() method has finished the loading state is set to false.
    loading: false,
  };
  // componentDidMount() is a lifecycle method which runs as soon as the component mounts.
  async componentDidMount() {
    // This sets the loading state to true, this can be used for lazy-loading.
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}
export default App;
