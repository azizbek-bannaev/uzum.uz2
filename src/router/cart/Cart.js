import React from 'react';
import "./Cart.css"
import { useSelector } from 'react-redux';
import CartProduct from '../../components/cart-product/CartProduct';
import CartEmpty from '../../components/wishesempty/CartEmpty'

function Cart() {
  const cart = useSelector((s) => s.cart.value);
  console.log(cart);
  return (
    <div className='container'>
       {
        cart.length ? <CartProduct data={cart} title="Sotib olingan"/> : <CartEmpty/>
      }
      
      
    </div>
  );
}

export default Cart;
