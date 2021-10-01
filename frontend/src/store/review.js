import { csrfFetch } from './csrf';

const ADD_ONE = 'reviews/ADD_ONE';
const DELETE_ONE = 'reviews/DELETE_ONE';
const UPDATE = 'reviews/UPDATE'
const LOAD = 'reviews/LOAD';


const addOneReview = review => ({
    type: ADD_ONE,
    review
});

const deleteOneReview = review => ({
    type: DELETE_ONE,
    review
});

const update = review => ({
    type: UPDATE,
    review
})

const load = reviews => ({
    type: LOAD,
    reviews
});

export const addReview = newReview => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(newReview)
    })
    if (response.ok) {
        const newReview = await response.json();
        dispatch(addOneReview(newReview));
        return newReview;
    }
}

export const getReviews = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews))
    }
}

export const updateReview = (editedReview) => async dispatch => {
    const { id, userId, spotId, review } = editedReview;
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId, spotId, review })
    });
    if (response.ok) {
        const editedResponse = await response.json();
        dispatch(update(editedResponse));
        return editedResponse;
    }
}

export const deleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw response;
    const review = await response.json();
    dispatch(deleteOneReview(review));
    return review;
}

export const addReviewForm = addReview => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(addReview)
    })
    if (!response.ok) throw response;
    const review = await response.json();
    dispatch(addOneReview(review));
    return review;
}


const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE: {
            if (!state[action.review.id]) {
                const newState = {
                    ...state,
                    [action.review.id]: action.review
                }
                const reviewList = newState.list?.map(id => newState[id]);
                reviewList?.push(action.review);
                return newState;
            }
            return {
                ...state,
                [action.review.id]: {
                    ...state[action.review.id],
                    ...action.review,
                }
            }
        }

        case UPDATE: {
            return {
                ...state, [action.review.updateReview.id]: {
                    ...action.review.updateReview
                }
            }
        }
        // case UPDATE: {
        //     const newState = {
        //         ...state, [action.updateReview.review]: action.review
        //     }
        //     return newState
        // }

        case LOAD: {
            const allReviews = {};
            action.reviews.forEach(review => {
                allReviews[review.id] = review;
            });
            return {
                ...allReviews,
                ...state,
            }
        };

        case DELETE_ONE: {
            const newState = {
                ...state,
            }
            delete newState[action.review]
            return newState
        }
        default:
            return state;
    }
}

export default reviewsReducer;
