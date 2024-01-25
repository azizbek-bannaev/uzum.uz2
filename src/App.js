import logo from './logo.svg';
import './App.css';
import NavbarContainer from './components/navbar/NavbarContainer';
import { Routes, Route } from "react-router-dom"
import Home from './router/home/Home';
import Login from './router/login/Login';
import Cart from './router/cart/Cart';
import Wishis from './router/wishis/Wishis';
import Footer from './components/footer/Footer';
import Nodfaund from './router/nodfaund/Nodfaund';
import { PRODUCTS } from "./static/index"
import SingleRoute from './router/single-route/SingleRoute';
import Auth from './router/auth/Auth';
import Admin from './router/admin/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavbarContainer/>
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS}/>} />
        <Route path='login' element={<Login/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='wishis' element={<Wishis/>} />
        <Route path='/' element={<Auth/>}>
        <Route path='admin' element={<Admin/>} />
        </Route>
        <Route path='product/:id' element={<SingleRoute/>} />
        <Route path='*' element={<Nodfaund/>} />
      </Routes>
      <br />
      <br />
      <br />
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
