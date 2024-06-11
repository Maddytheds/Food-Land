import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    for (const field in signupData) {
      if (signupData[field].trim() === '') {
        setError(`Please fill in ${field}`);
        return;
      }
    }

    // Check if passwords match
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    try {
      const response = await axios.post(
        'http://localhost:8001/users',
        signupData
      );
      console.log(response.data);

      setSignupData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="main-signup-div">
      <div className="signup-container">
        <div className="text-img-section">
          <p>Fill out this information to create an account</p>
          <img src="auth-page-img.svg" alt="Signup illustration" />
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit} className="form-signup">
            {error && <p className="error-message">{error}</p>}
            <input
              className="input-feilds"
              type="text"
              placeholder="Full Name"
              value={signupData.fullName}
              onChange={(event) =>
                setSignupData({ ...signupData, fullName: event.target.value })
              }
            />
            <input
              className="input-feilds"
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(event) =>
                setSignupData({ ...signupData, email: event.target.value })
              }
            />
            <div className="input-feilds">
              <input
                // className="input-feilds"
                type="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(event) =>
                  setSignupData({ ...signupData, password: event.target.value })
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
              </svg>
            </div>
            <div className="input-feilds">
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={(event) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: event.target.value,
                  })
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
              </svg>
            </div>
            <div className="privacy-policy">
              <input type="radio" name="policy" required />
              <label htmlFor="policy">
                I agree with the privacy and policies
              </label>
            </div>

            <button type="submit">Create Account</button>
            <div className="existing-acc">
              <a href="/login">Already have an account?</a>
              <p>Log in here</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
