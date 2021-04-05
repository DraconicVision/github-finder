import React, { Fragment, Component } from 'react';
// Using {} allows us to forget about using React. in-front of the elements within the {}s.
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
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
    // This is using global variables specific to a local environment, this can be found in the .env.local file within the root directory.
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      // Notice that this is using `` back-ticks rather than '' single quotes, back-ticks are needed when using variables within strings.
    );
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='container'>
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}
export default App;
