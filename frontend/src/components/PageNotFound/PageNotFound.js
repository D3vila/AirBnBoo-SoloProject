import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <>
            <div className='face'>
                <div className="eyes"></div>
                <div className="dimples"></div>
                <div className="mouth"></div>
                <div className="ghost__feet">
                    <div className="ghost__feet-foot"></div>
                    <div className="ghost__feet-foot"></div>
                    <div className="ghost__feet-foot"></div>
                    <div className="ghost__feet-foot"></div>
                </div>
            </div>

            <h1>Oops! Something went wrong!</h1>
            <div className="btn">Return to Home</div>
        </>
    )
}
