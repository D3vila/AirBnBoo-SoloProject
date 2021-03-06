import { Link } from 'react-router-dom';
import './HomePage.css';
import castle from '../videos/castle.mp4'
import Footer from '../Footer/Footer';

function HomePage() {

    return (
        <>
            <div className='home__container'>
                <video className='castleVid' loop autoPlay muted>
                    <source src={castle} type='video/mp4' />
                </video>
                <header className='htitle'>
                    <h1 className='header__title'>Spend an evening at a
                        <span>haunted Getaway</span>
                        <Link className="explore__link" to="/listings">Explore</Link>
                    </h1>
                </header>
            </div>
            <Footer/>
        </>

    );

}

export default HomePage;
