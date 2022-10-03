// Libraries
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Local Components
import { Spinner } from './components/templates/Loader/Loader.style';
import Header from "./components/other/Header/Header.component";
import Sidebar from "./components/other/Sidebar/Sidebar.component";
import OverlayHandler from './utils/OverlayHandler';
import Article from './components/other/Article/Article.component';

// Pages
const HelloWorld = lazy(() => import('./components/pages/HelloWorld/HelloWorld.component'));
const MoviesPage = lazy(() => import('./components/pages/Movies/MoviesPage.component'));
const MusicPage = lazy(() => import('./components/pages/Music/MusicPage.component'));
const VideosPage = lazy(() => import('./components/pages/Videos/VideosPage.component'));

// Object Initialisations
OverlayHandler.init();

function App() {
  return (<Provider store={store}>
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Article>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HelloWorld} />
            <Route exact path='/movie' component={MoviesPage} />
            <Route exact path='/music' component={MusicPage} />
            <Route exact path='/video' component={VideosPage} />
          </Suspense>
        </Switch>
      </Article>
    </BrowserRouter>
  </Provider>);
}

export default App;

