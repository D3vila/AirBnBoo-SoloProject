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
            <div className='listings__page'>
                <div className='listings__container'>
                    <div className='nav__container'>
                        {listings.map(listing => {
                            return (
                                <NavLink key={listing.id} to={`/listings/${listing.id}`}>
                                    <div className='nav__image__container'>
                                        <div className='nav__image'>
                                            <img className='image' src={listing.img} alt=''></img>
                                        </div>
                                        <div className='listing__info'>
                                            <div className='listing__name'>{listing.name}</div>
                                            <div className='listing__address'>{listing.address}</div>
                                        </div>
                                        <div className='price__container'>
                                            <div className='listing__price'>${listing.price} / night</div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                    <a className='backtoTop' href='#top'>TOP</a>
                </div>
            </div>
        </>
    );
}

export default ListingsPage;
