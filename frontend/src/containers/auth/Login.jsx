import React, {useState, useEffect, useCallback } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slides/authSlide'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import backgroundImg from '../../assets/images/background-login.jpg'
import { useNavigate  } from "react-router-dom";
import Loader from '../../components/Loader';

const Login = () => {
    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const authRedux = useSelector(state => state.auth);

    useEffect(() => {
      console.log(authRedux);
        if (authRedux.user.access_token !== undefined) {
            console.log('Logged in', authRedux.user.access_token);
            navigate('/');
        }
    }, [authRedux])

    const handleOnChange = useCallback(event => {
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
    });

    const handleSubmit = () => {
      setIsLoading(true);
      setTimeout(() => {
        const action = login(data);
        dispatch(action);
        setIsLoading(false);
      }, 2000)
    }

    return (
      <>
        <HelmetProvider>
          <Helmet>
            <link rel="stylesheet" href='/assets/css/main.css' />
            <link rel="stylesheet" href='/assets/css/util.css' />
            <link rel="stylesheet" href='/assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css' />
          </Helmet>
        </HelmetProvider>
        <div className="limiter">
          <div
            className="container-login100"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41">Account Login</span>
              <div className="login100-form validate-form p-b-33 p-t-5">
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter username"
                >
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                  />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter password"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleOnChange}
                  />
                  <span className="focus-input100" data-placeholder="" />
                </div>

                <div className="container-login100-form-btn m-t-32">

                  <button className="login100-form-btn" onClick={handleSubmit}>
                    { !isLoading ? 'Login' : <Loader className='spinner' />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Login