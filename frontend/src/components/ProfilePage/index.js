import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Bookings from '../Bookings';
import './ProfilePage.css';
import ghostProfile from '../videos/profileGhost.png'

function ProfilePage() {

    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const bookings = Object.values(useSelector(state => {
        return state.bookings
    }))
    // console.log(bookings)


    if (!sessionUser) {
        history.push('/')
    }

    let sessionBookings;
    if (bookings.length) {
        sessionBookings = (
            <Bookings />
        )
    } else {
        sessionBookings = (
            <>
                <h1 className='noBooking'>- You have no bookings! -</h1>
            </>
        )
    };

    return (
        <>
            <div className='profile__container'>
                <div className='profile__pic'>
                    <img className='ghostface' src={ghostProfile} alt=''></img>
                </div>
                <div className='profile__info'>
                    <div>
                        <h1 className='username__title'>{sessionUser.username}</h1>
                    </div>
                    <div>
                        <h2 className='name__title'>Name: Mr. BoogeyMan</h2>
                    </div>
                    <div>
                        <h2 className='email__title'>Email: {sessionUser.email} </h2>
                    </div>
                </div>
            </div>
            <div className='booking__container'>
                <h1 className='booking__title'>Haunted Getaways Booked</h1>
                {sessionBookings}
            </div>
        </>
    )
}

export default ProfilePage;
