import castle from '../videos/castle.mp4'

function HomePage() {

    return (
        <>
           {/* <video loop autoPlay muted>
                <source src={castle} type='video/mp4' />
           </video> */}
            <div className='overlay'></div>
            <header>
                <h1>Discover Haunted locations</h1>
            </header>
        </>
    );

}

export default HomePage;
