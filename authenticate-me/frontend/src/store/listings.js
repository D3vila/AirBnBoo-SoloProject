const LOAD = 'listings/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const getListings = () => async dispatch => {
    console.log('listings')
    const response = await fetch(`/api/listings`);

    if (response.ok) {
        const listings = await response.json();
        console.log(listings, 'listings')
        dispatch(load(listings))
    }
};

const initialState = {
    list: []
}

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
        default: {
            return state;
        }
    }
}

export default listingsReducer;
