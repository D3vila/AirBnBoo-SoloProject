import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings, deleteBooking } from '../../store/bookings';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import './Bookings.css';

function Bookings() {

    const sessionUser = useSelector(state => state.session.user);
    // const userId = sessionUser.id
    const userId = sessionUser?.id;
    const dispatch = useDispatch();

    const bookings = Object.values(useSelector(state => {
        return state.bookings
    }))
    const sortedBookings = bookings.sort(function (a, b) {
        return b.id - a.id;
    })


    // console.log(bookings)
    // console.log(sortedBookings)
    // console.log("HELLO")

    useEffect(() => {
        dispatch(getBookings(userId));
    }, [dispatch, userId]);

    if (!sortedBookings) {
        return null;
    }

    const deleteBookingButton = (id) => {
        dispatch(deleteBooking(id))
    }

    return (
        <>
            <div className='userBookings__container'>
                {sortedBookings?.map((booking) => (
                    <div key={booking?.id} className='eachBooking__container'>
                        <NavLink to={`/listings/${booking?.spotId}`}>
                            <img className='booking__img99' src={booking?.Spot.img} alt='listing'></img>
                        </NavLink>
                        <div className='booking__info'>
                            <div className='booking__name'>{booking?.Spot.name}</div>
                            <div className="booking__address">Address: {booking?.Spot.address}</div>
                            <div className='booking__price'>Price: ${booking?.Spot.price} / night</div>
                            <div className='booking_createdAt'>Booking Created At: {new Date(booking?.createdAt).toLocaleString()}</div>
                        </div>
                        <button className='cancel__button99' type="button" onClick={() => deleteBookingButton(booking?.id)}>Cancel 🗑</button>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Bookings
