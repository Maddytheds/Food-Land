import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './component/auth-page/authpage';
import Signup from './component/signup/signup';
import Login from './component/login/login';
import Home from './component/home/home';
import AboutUs from './component/about-us/about-us';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lol" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
