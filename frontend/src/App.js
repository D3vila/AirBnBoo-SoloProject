// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import SignupFormPage from './components/SignupFormPage';
import HomePage from './components/HomePage/index'
import ListingsPage from './components/ListingsPage';
import ListingPage from './components/ListingPage'
import ProfilePage from './components/ProfilePage'
import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/listings' exact>
            <ListingsPage />
          </Route>
          <Route path='/listings/:id'>
            <ListingPage />
          </Route>
          {/*<Route path='/profile'>
            <ProfilePage />
          </Route>*/}
          <Route path='/users/:id'>
            <ProfilePage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route>
            <h1>Under construction or page not found</h1>
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
