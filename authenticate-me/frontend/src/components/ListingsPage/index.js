import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import {Link} from 'react-router-dom';
import { getListings } from '../../store/listings';

import './ListingsPage.css';

function ListingsPage() {
    const dispatch = useDispatch();
    const listings = useSelector((state) => ((state.spots)));

    console.log(listings)


    useEffect(() => {
        dispatch(getListings())
    }, [dispatch])

    if (!listings) {
        return null;
    }


    return (
        <>
            {listings.map(listing => {
                return (
                    <h2>{listing.name}</h2>
                )

            })}
        </>
    );

}

export default ListingsPage;
