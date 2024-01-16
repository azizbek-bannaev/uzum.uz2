import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';
import Empty from '../../components/wishesempty/Empty';




function Wishis() {
  const wishes = useSelector(s => s.wishes.value)
  console.log(wishes);
  return (
    <div>
      {
        wishes.length ? <Products title="Sevimlilar"/> : <Empty/>
      }
      <Products data={wishes}   />
    </div>
  )
}

export default Wishis