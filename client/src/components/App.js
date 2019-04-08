import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUserData } from '../actions';
import requireAuth from '../utils/requireAuth';

const Landing = lazy(() => import('./Landing'));
const Home = lazy(() => import('./Home'));

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
                const { data } = this.props.currentUser;
                if (data) {
                  return <Redirect to='/home' />;
                } else {
                  return <Landing />;
                }
              }}
            />
            <Route exact path='/home' component={requireAuth(Home)} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps, { fetchCurrentUserData })(App);
