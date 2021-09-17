const LOAD = 'listings/LOAD';
const ADD_ONE = 'listings/ADD_ONE';

const load = list => ({
    type: LOAD,
    list,
});

const addOneListing = listing => ({
    type: ADD_ONE,
    listing,
})

export const getListings = () => async dispatch => {
    const response = await fetch(`/api/listings`);

    if (response.ok) {
        const listings = await response.json();
        dispatch(load(listings))
    }
};

export const getAListing = (listingId) => async dispatch => {
    const response = await fetch(`/api/listings/${listingId}`)
    if (!response.ok) throw response;
    let listing = await response.json();
    dispatch(addOneListing(listing))
}

const initialState = {};

const listingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allListings = {};
            action.list.forEach(listing => {
                allListings[listing.id] = listing;
            });
            return {
                ...allListings,
                ...state,
            }
        }

        case ADD_ONE: {
            if (!state[action.listing.id]) {
                const newState = {
                    ...state,
                    [action.listing.id]: action.listing
                };
                const listingList = newState.list?.map(id => newState[id]);
                listingList?.push(action.listing);
                return newState;
            }
            return {
                ...state,
                [action.listing.id]: {
                    ...state[action.listing.id],
                    ...action.listing
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default listingsReducer;
