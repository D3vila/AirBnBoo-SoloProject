import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getReviews, deleteReview } from '../../store/review';
import EditReviewModal from '../EditReview';
import './Reviews.css'
// import ghostProfile from '../videos/profileGhost.png'

function Reviews() {
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const dispatch = useDispatch();

    // getting all reviews from the array
    const reviews = useSelector((state) => ((Object.values(state.reviews))));
    // filtering all the reviews that match the review.spotId to the review.id into a number
    const listingReviews = reviews.filter(review => review.spotId === +id);

    const sortedReviews = listingReviews.sort(function (a, b) {
        return b.id - a.id;
    })

    // console.log(reviews)
    // console.log(listingReviews)
    // console.log(id, +id) in the c

    const removeReview = (id) => {
        dispatch(deleteReview(id))
        window.alert('Review has been deleted')
    }

    useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch, id])


    if (!listingReviews) {
        return null;
    }

    return (
        <>
            <div className='reviews__container12'>
                {sortedReviews.map((review) => {
                    return (
                        <div key={review.id} className='review__container12'>
                            <div className='reviewer__container12'>
                                <div className="image__container12">
                                    <img className='image12' src={review.User.image_url} alt="reviewer"></img>
                                </div>
                                <div className='reviewer12'>
                                    {review.User.username}
                                </div>
                                <div className='timestamp12'>
                                    {new Date(review.createdAt).toLocaleString()}
                                </div>
                            </div>
                            <div className='review__text12'>{review.review}</div>
                            {sessionUser && sessionUser.id === review.User.id &&
                                <button id='deleteReview12' onClick={() => removeReview(review.id)}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            }
                            {sessionUser && sessionUser.id === review.User.id &&
                                <EditReviewModal selectedReview={review} />
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Reviews;
