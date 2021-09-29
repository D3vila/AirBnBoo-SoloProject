import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getAListing } from '../../store/listings';
import Reviews from '../Reviews'
import AddReviewForm from '../AddReviewForm/index'
import { addBooking } from '../../store/bookings';
import './listing.css';


function ListingPage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const listing = useSelector(state => {
        return state.listings[id]
    });

    useEffect(() => {
        dispatch(getAListing(id))
    }, [id, dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let sessionReview;
    if (sessionUser) {
        sessionReview = (
            <AddReviewForm user={sessionUser} listing={id} />
        )
    } else {
        sessionReview = (
            <>
                <h2 className='mustBeLogin'>- Must be Login to leave a review -</h2>
            </>
        )
    }


    const bookingStay = async (e) => {
        e.preventDefault()

        let bookingForm = {
            spotId: id,
            userId: sessionUser.id,
        }
        history.push(`/users/${sessionUser.id}`);
        await dispatch(addBooking(bookingForm))
    }


    let sessionBookButton;
    if (sessionUser) {
        sessionBookButton = (
            <button className='booking__button3' type='submit' onClick={bookingStay}>Book</button>
        );
    } else {
        sessionBookButton = (
            <>
                <button className='booking__button3' type='button' disabled>Login to Book</button>
            </>
        )
    }

    if (!listing) {
        return null;
    }


    return (
        <>
            <div className='listing__container1'>
                <h1>{listing.name}</h1>
                <h2 className='listing__address1'>{listing.address}</h2>
                <div className='display__container1'>
                    <div className='image__container'>
                        <img className='mainImage' src={listing.img} alt=''></img>
                    </div>
                    <div className='listing__info1'>
                        <p className='listDesc1'>{listing.description}</p>
                    </div>
                </div>
                <h1 className='reviewsTitle123'>Reviews</h1>
                {sessionReview}
                <div className='lower__quad'>
                    <Reviews />
                    <div className='booking__container1'>
                        <div className='price__container1'>
                            <div className='price__one'>${listing.price} / night</div>
                            {/*<div className='per__night'>/ night</div>*/}
                        </div>
                        {sessionBookButton}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingPage;
