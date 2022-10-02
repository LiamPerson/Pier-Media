// Libraries
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Local Components
import { Spinner } from './components/templates/Loader/Loader.style';
import Header from "./components/other/Header/Header.component";
import Sidebar from "./components/other/Sidebar/Sidebar.component";

// Pages
const HelloWorld = lazy(() => import('./components/pages/HelloWorld/HelloWorld.component'));

function App() {
  return (<Provider store={store}>
    <BrowserRouter>
      <Header />
      <Sidebar />
      <div>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HelloWorld} />
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>);
}

export default App;
