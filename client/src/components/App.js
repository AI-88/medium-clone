import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import { fetchCurrentUserData } from '../actions';
import requireAuth from '../utils/requireAuth';
import ContentLayout from '../utils/ContentLayout'
import Sidebar from './Sidebar';

const Landing = lazy(() => import('./Landing'));
const Home = lazy(() => import('./Home'));
const Markets = lazy(() => import('./Markets'));
const AddMarketsForm = lazy(() => import('./AddMarketsForm'));

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sidebar />
          <ContentLayout>
            <Suspense fallback={<Spin />}>
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
                <Route exact path='/markets/new' component={requireAuth(AddMarketsForm)} />
                <Route exact path='/markets' component={requireAuth(Markets)} />
              </Switch>
            </Suspense>
          </ContentLayout>
        </Layout>
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
