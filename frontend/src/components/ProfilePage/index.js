import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import Bookings from '../Bookings';
import {getOneUser} from '../../store/users'
import './ProfilePage.css';
import ghostProfile from '../videos/profileGhost.png'

function ProfilePage() {
    // const [user, setUser] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();

    // const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    // const bookings = Object.values(useSelector(state => {
    //     return state.bookings
    // }))
    // console.log(bookings)

    const user = useSelector(state => state.user)
    // console.log(user)

    useEffect(() => {
        dispatch(getOneUser(id))
    }, [dispatch, id])



    let sessionBookings;
    if (user?.bookings?.length) {
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
                <h1 className='booking__title'>Your Booked Haunted Getaways </h1>
                {sessionBookings}
            </div>
        </>
    )
}

export default ProfilePage;
