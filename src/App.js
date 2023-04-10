import './App.css';
import LoginPage from './authentication/login/LoginPage';
import Home from './component/content/Home';
import { Navigate, Navigator, Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';
import Navbar from './component/navbar/Navbar';
import Category from './pages/Category';
import MyAccount from './component/myaccount/MyAccount';
import ResturentDetails from './component/resturent/ResturentDetails';
import ProfilePage from './pages/ProfilePage';
import OrderHistory from './pages/OrderHistory';
import Address from './pages/Address';
import CustomerSupport from './pages/CustomerSupport';
import CheckOut from './pages/CheckOut';
import SearchAll from './pages/SearchAll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/my_account' element={<MyAccount />} >
          <Route index element={<ProfilePage />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="address" element={<Address />} />
          <Route path="customers" element={<CustomerSupport />} />

        </Route>
        <Route path='/home' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/checkout/:id' element={<CheckOut />} />
        <Route path='/resturent_details/:id' element={<ResturentDetails />} />
        <Route path='/all_search' element={<SearchAll />} />


      </Routes>
    </div>
  );
}

export default App;
