
import castle from '../videos/castle.mp4'

function HomePage() {

    return (
        <div className='home__container'>
            <video loop autoPlay muted>
                <source src={castle} type='video/mp4' />
            </video>
            <h1>Discover Paranormal Locations</h1>
            <p>Are you brave enough?</p>
        </div>
    );

}

export default HomePage;