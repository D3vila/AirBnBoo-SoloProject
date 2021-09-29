import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
// import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css';
import { useHistory } from 'react-router-dom'

function ProfileButton({ user }) {
  // const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  // console.log(user.id)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(sessionActions.logout());
  };

  const profileRedirect = (e) => {
    e.preventDefault();
    history.push(`/users/${user.id}`);
  }

  return (
    <>
      <button className='profile__button' onClick={openMenu}>
        <div className='icon__container'>
          <div className='ghost'>
            <i className="fas fa-ghost"></i>
          </div>
          <div className='bar'>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Hi, {user.username}</li>
          <li>
            <button className='goProfile__button' onClick={profileRedirect}>MyProfile</button>
          </li>
          <li>
            <button className='logout__button' onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
