import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Landing = lazy(() => import('./Landing'));
const Home = lazy(() => import('./Home'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
