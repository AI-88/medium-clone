import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUserData } from '../actions';

class Home extends Component {
  render() {
    console.log(this.props.currentUser);
    return (
      <h1>Home route</h1>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps, { fetchCurrentUserData })(Home);
