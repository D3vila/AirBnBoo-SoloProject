import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Logo from '../videos/booIcon.png'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='profile__button'>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="signup__link" to='/signup'>Sign Up</NavLink>
      </>

    );
  }

  return (
    <nav className='navbar__container' id='top'>
      <ul>
        <li className='nav__list'>
          <div className='homeLogo'>
            <NavLink className='AirbnbWord' exact to="/">AirBnBoo
              <img className='booIcon' src={Logo} alt='icon' />
            </NavLink>
          </div>
          <div className='topnav-right'>
            <NavLink className='listing__link' to='/listings'>Listings</NavLink>
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
