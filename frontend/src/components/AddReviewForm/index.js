import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addReviewForm } from '../../store/review'
import './AddReviewForm.css';

const AddReviewForm = ({ user, listing }) => {
    const dispatch = useDispatch();
    const [review, setReview] = useState('');
    // console.log(+listing)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addReview = {
            review,
            userId: user.id,
            spotId: +listing
        };
        await dispatch(addReviewForm(addReview))
        setReview('');
    };

    return (
        <div className='form__container'>
            <form className='review__form' onSubmit={handleSubmit}>
                <textarea
                    className='review-text-area'
                    type='text'
                    placeholder='Tell us about your stay...'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <button className='reviewSubmit__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddReviewForm;
