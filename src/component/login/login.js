import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8001/users');
      const users = response?.data;

      const user = users.find(
        (user) =>
          user.email === loginData.email && user.password === loginData.password
      );
      if (user) {
        let id = user.id;
        localStorage.setItem('token', id);
        setSuccess('Login successful!');
        setError('');

        navigate('/home');
      } else {
        setError('Invalid email or password');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="main-signup-div">
      <div className="signup-container">
        <div className="text-img-section">
          <p>Enter your credentials to log in.</p>
          <img src="auth-page-img.svg" alt="" />
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit} className="form-signup">
            <input
              className="input-feilds"
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(event) =>
                setLoginData({ ...loginData, email: event.target.value })
              }
            />
            <div className="input-feilds">
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(event) =>
                  setLoginData({ ...loginData, password: event.target.value })
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
              </svg>
            </div>

            <div className="privacy-policy">
              <input type="radio" name="policy" />
              <label htmlFor="policy">
                I agree with the privacy and policies
              </label>
            </div>

            <button>Login</button>
            <div className="existing-acc">
              <a href="/signup">Don't have an account?</a>
              <p>Sign-up here</p>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
      </div>
    </div>
  );
}
