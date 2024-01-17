import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';
import WishesEmpty from '../../components/wishesempty/WishesEmpty';




function Wishis() {
  const wishes = useSelector(s => s.wishes.value)
  console.log(wishes);
  return (
    <div>
      {
        wishes.length ? <Products data={wishes} title="Sevimlilar"/> : <WishesEmpty/>
      }
      
    </div>
  )
}

export default Wishis