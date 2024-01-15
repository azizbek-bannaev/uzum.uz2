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

function App() {
  return (
    <div className="App">
      <NavbarContainer/>
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS}/>} />
        <Route path='login' element={<Login/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='wishis' element={<Wishis/>} />
        <Route path='product/:id' element={<SingleRoute/>} />
        <Route path='*' element={<Nodfaund/>} />
      </Routes>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
}

export default App;
