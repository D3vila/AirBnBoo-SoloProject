import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';
import lightHouse from '../videos/oceanView-lighthouse1.mp4'

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to={`/users/${sessionUser.id}`} />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ username, email, password, }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field'])
    };

    return (
        <>
            <div className='split__screen'>
                <div className='left__side'>
                    <section className='half__page'>
                        <div className='video__container1'>
                            <video className='lighthouse__vid' loop autoPlay muted>
                                <source src={lightHouse} type='video/mp4' />
                            </video>
                            <div className='overlay1'>
                                <h1 className='left__title'>Explore the paranormal side of traveling</h1>
                                <p className='left__subTitle'>Over 100,000 locations all over the world.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='right__side'>
                    <form className='signup__form' onSubmit={handleSubmit}>
                        <section className='half__page'>
                            <h2 className='right__title'>Sign Up</h2>
                        </section>
                        <div>
                            <ul>
                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                            </ul>
                        </div>
                        <div>
                            <label>
                                Username
                                <input
                                    type='text'
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}

                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email
                                <input
                                    type='text'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password
                                <input
                                    type='password'
                                    value={password}
                                    placeholder='Must be at least 6 characters'
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Confirm Password
                                <input
                                    type='password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}

                                />
                            </label>
                        </div>
                        <button className='signup__button' type='submit'>Sign Up</button>
                    </form>

                </div>


            </div>
        </>
    );
};



export default SignupFormPage;
