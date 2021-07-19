import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import ListingsPage from '../ListingsPage';
import Logo from '../videos/booIcon.png'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to='/signup'>Sign Up</NavLink>
      </>

    );
  }

  return (
    <>
    <nav>
      <div className='homeLogo'>
        <NavLink className='AirbnbWord' exact to="/">AirBnBoo
          <img className='booIcon' src={Logo}/>
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to='/listings'>Listings</NavLink>
        </li>
        <li>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navigation;
