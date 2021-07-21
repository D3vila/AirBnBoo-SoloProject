import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getListings } from '../../store/listings';

import './ListingsPage.css';

function ListingsPage() {
    const dispatch = useDispatch();
    const listings = useSelector((state) => ((Object.values(state.listings)))); //state.(name) The name you gave the slice of state in your store/index.js file when you bring it into the rootReducer
    // console.log(listings)
    useEffect(() => {
        dispatch(getListings())
    }, [dispatch])

    if (!listings) {
        return null;
    }

    return (
        <>
            <div>
                <div>
                    <nav>
                        {listings.map(listing => {
                            return (
                                <NavLink key={listing.id} to={`/listings/${listing.id}`}>
                                    <div>
                                        <div className='nav__image'>
                                            <img src={listing.img} alt=''></img>
                                        </div>
                                        <div>
                                            <div className='listing__name'>{listing.name}</div>
                                            <div className='listing__address'>{listing.address}</div>
                                        </div>
                                        <div>
                                            <div className='listing__price'>${listing.price}/night</div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}

export default ListingsPage;
