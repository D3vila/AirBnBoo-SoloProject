import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getAListing } from '../../store/listings';
import './listing.css';


function ListingPage() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const history = useHistory();

    const listing = useSelector(state => {
        return state.listings[id]
    });

    useEffect(() => {
        dispatch(getAListing(id))
    }, [id, dispatch])

    // let sessionReview;
    // if (sessionUser) {
    //     sessionReview = (
    //     )
    // }
    // let sessionBookButton;
    // if (sessionUser) {
    //     sessionBookButton = (
    //         <button type='submit' onClick={bookStay}>Book</button>
    //     );
    // } else {
    //     sessionBookButton = (
    //         <>
    //             <button type='button' disabled>Login to Book</button>
    //         </>
    //     )
    // }

    if (!listing) {
        return null;
    }

    return (
        <>
            <div className='listing__container'>
                <h1>{listing.name}</h1>
                <h2>{listing.address}</h2>
                <div className='image__container'>
                    <img src={listing.img} alt=''></img>
                </div>
                <div className='listing__info'>
                    <p>{listing.description}</p>
                </div>
                <h1>Reviews</h1>
                {/*sessionReviews*/}
                <div>
                    {/*<Reviews /> */}
                    <div className='booking__container'>
                        <div className='price__container'>
                            <div className='price__one'>${listing.price}</div>
                            <div className='per__night'>/night</div>
                        </div>
                        <div className='booking__dates'>
                            <div className='checkin__container'>
                                <div>Check-In</div>
                                <div className='date'></div>
                            </div>
                            <div className='checkout__container'>
                                <div>Checkout</div>
                                <div className='date'></div>
                            </div>
                            <div className='guests'>
                                <div >Guests</div>
                                <div className='date'></div>
                            </div>
                            {/*sessionBookButton */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingPage;
