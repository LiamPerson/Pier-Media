// Libraries
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Local Components
import { Spinner } from './components/templates/Loader/Loader.style';

// Pages
const HelloWorld = lazy(() => import('./components/pages/HelloWorld/HelloWorld.component'));

function App() {
  return (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HelloWorld} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  </Provider>);
}

export default App;
