import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getReviews, deleteReview } from '../../store/review';
import deletebutton from '../videos/delete.png'

function Reviews() {
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const dispatch = useDispatch();

    const reviews = useSelector((state) => ((Object.values(state.reviews))));// change to get reviews to listingId
    const listingReviews = reviews.filter(review => review.spotId === +id);
    // console.log(reviews)
    // console.log(listingReviews)
    // console.log(id, +id) in the c

    const removeReview = (id) => {
        dispatch(deleteReview(id))
    }

    useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch, id])

    if (!listingReviews) {
        return null;
    }

    return (
        <>
            <div className='reviews__container'>
                {listingReviews.map((review) => {
                    return (
                        <div key={review.id} className='review__container'>
                            <div className='reviewer__container'>
                                {/*<div className="image__container">
                                    <img src={review.User.image_url} alt="reviewer"></img>
                                </div>*/}
                                <div className='reviewer'>
                                    {review.User.username}
                                </div>
                            </div>
                            <div className='review__text'>{review.review}</div>
                            {sessionUser && sessionUser.id === review.User.id &&
                                <button id='deleteReview' onClick={() => removeReview(review.id)}>
                                    <img src={deletebutton} alt='delete logo' />
                                </button>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Reviews;
