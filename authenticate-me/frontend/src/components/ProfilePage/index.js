import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// import Bookings from ''
import './ProfilePage.css';

function ProfilePage() {

    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    if(!sessionUser) {
        history.push('/')
    }

    // let sessionBookings;
    // if (bookings.length) {
    //     sessionBookings = (
    //         <Bookings />
    //     )
    // } else {
    //     sessionBookings = (
    //         <>
    //             <h1>No haunted getaways booked!</h1>
    //         </>
    //     )
    // };

    return (
        <>
            <div className='profile__container'>
                <div className='profile__pic'>
                    <img></img>
                </div>
                <div className='profile__info'>
                    <h1></h1>
                    <h2>Name: Mr. BoogeyMan</h2>
                    <h2>Email: </h2>
                </div>
            </div>
            <div className='booking__container'>
                <h1>Haunted Getaways Booked</h1>
                {/*sessionBookings*/}
            </div>
        </>
    )
}

export default ProfilePage;
