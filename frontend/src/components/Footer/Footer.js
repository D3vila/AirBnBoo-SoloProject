import React from 'react';
import './Footer.css';

function Footer () {

    return (
        <>
            <div className='footer__container'>
                <div className='footerLogo__container'>
                    <a className='footer__logos' href='https://www.linkedin.com/in/antonio-davila-olivares-843856212/'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className='footer__logos' href='https://github.com/D3vila'>
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>
                <h2 className='footer__title'>Constructed by Antonio Davila-Olivares</h2>
                <div className='footer__info1'>
                    <h3>This AirBnb clone was constructed in a week-long react-redux solo project</h3>
                </div>
                <div className='footer__info2'>
                    <h3>{"for App Academy's software engineering bootcamp"}</h3>
                </div>
            </div>
        </>
    )
}

export default Footer;
