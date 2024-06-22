import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignup = () => {
    navigate('/signup');
  };
  return (
    <div className="auth-container">
      <div className="auth-page">
        <div className="login-signup">
          <div className="welcome">
            <h4>Welcome to</h4>
            <h1>Latouche Food Land</h1>
          </div>
          <div className="auth-body">
            <p>
              We offer you a well-stocked basket of fresh and organic products
              delivered with the well-detailed recipe card with advice and tips
              to allow you to enjoy an unprecedented Culinary experience...😍😍
            </p>
          </div>
          <div className="auth-button">
            <button onClick={handleSignup} className="create-acc-btn">
              Create Account
            </button>
            <button onClick={handleLogin} className="login-btn">
              Login
            </button>
          </div>
        </div>
        <div className="auth-svg-img">
          <img src="auth-page-img.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
