import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';
import CartEmpty from '../../components/wishesempty/CartEmpty';
function Cart() {
  const wishes = useSelector(s => s.wishes.value)
  return (
    <div>
      {
        wishes.length ? <Products title="Sevimlilar"/> : <CartEmpty/>
      }
      <Products data={wishes}   />
    </div>
  )
}

export default Cart