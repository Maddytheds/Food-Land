import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './component/auth-page/authpage';
import Signup from './component/signup/signup';
import Login from './component/login/login';
import Home from './component/home/home';
import OrderPage from './component/orderPage/ordersPage';
import CateringService from './component/foodServices/cateringService';
import HomeCookForm from './component/foodServices/homeCooking/homeCook';
import SettingPage from './component/settinggs/settingPage';
import Protected from './component/protectedRoutes/protectedRoutes';
import MapComponent from './component/mapPage/confirmation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Protected />}>
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="/services/catering" element={<CateringService />} />
            <Route path="/services/homecook" element={<HomeCookForm />} />
            <Route path="/services/confirmation" element={<MapComponent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
