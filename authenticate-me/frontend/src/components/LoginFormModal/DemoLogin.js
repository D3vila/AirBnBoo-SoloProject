import { demoUserLogin } from '../../store/session';
import { useDispatch } from 'react-redux';
// import './loginForm.css';

const DemoLogin = () => {
    const dispatch = useDispatch();

    const demoLogin = async () => {
        dispatch(demoUserLogin());
    }
    return (
        <div className='demoLogin__form'>
            <button className='demo__button' type='submit' onClick={demoLogin}>
                Demo login
            </button>
        </div>
    )
}

export default DemoLogin;
