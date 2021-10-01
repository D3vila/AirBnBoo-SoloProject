import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview } from '../../store/review';

export default function EditReview ({ selectedReview, setShowModal }) {
    const dispatch = useDispatch();
    const [review, setReview] = useState(selectedReview.review);

    const handleEdit = (e) => {
        e.preventDefault();
        const newReview = {
            id: selectedReview.id,
            userId: selectedReview.userId,
            spotId: selectedReview.spotId,
            review,
        };
        dispatch(updateReview(newReview));
        setShowModal(false);
        window.location.reload()
    };

    return (
        <div className='editReview_containerModal'>
            <h2>Edit Review</h2>
            <form className='editReviewForm' onSubmit={handleEdit}>
                <div>
                    <textarea name='review' value={review} onChange={e => setReview(e.target.value)} />

                </div>
                <div>
                    <button type='submit' className='editReviewButtonForm'>Update Review</button>
                </div>

            </form>
        </div>
    )
}
