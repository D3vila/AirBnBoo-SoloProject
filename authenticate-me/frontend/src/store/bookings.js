import { csrfFetch } from './csrf';

const ADD_ONE = 'bookings/ADD_ONE';
const DELETE_ONE = 'bookings/DELETE_ONE';
const LOAD = 'bookings/LOAD';

const addOneBooking = booking => ({
    type: ADD_ONE,
    booking
});

const deleteOneBooking = booking => ({
    type: DELETE_ONE,
    booking
});

const load = bookings => ({
    type: LOAD,
    bookings
});

export const addBooking = newBooking => async dispatch => {
    const response = await csrfFetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify(newBooking)
    })
    if (!response.ok) throw response;
    const booking = await response.json();
    dispatch(addOneBooking(booking));
    return booking;

};

export const deleteBooking = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${userId}`, {
        method: 'DELETE',
    })
    if (!response.ok) throw response;
    const booking = await response.json();
    dispatch(deleteOneBooking(booking));
    return booking;
};

export const getBookings = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${userId}`);

    if (response.ok) {
        const bookings = await response.json();
        dispatch(load(bookings));
    }
}

const initialState = {}

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE: {
            const newState = {
                ...state,
                [action.booking.id]: action.booking
            }
            return newState;
        }

        case DELETE_ONE: {
            const newState = {
                ...state,
            }
            delete newState[action.booking]
            return newState
        }

        case LOAD: {
            const allBookings = {};
            action.bookings.forEach(booking => {
                allBookings[booking.id] = booking;
            });
            return {
                ...allBookings,
            }
        };
        default:
            return state;
    }
};

export default bookingsReducer;
