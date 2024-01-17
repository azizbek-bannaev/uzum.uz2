import React from 'react'
import cartemptyimg from "../../assets/shopocat.490a4a1.png"
import { NavLink } from 'react-router-dom' 
import "./Empty.css"

function CartEmpty() {
  return (
    <div className='empty container'>
        <img src={cartemptyimg} alt="" />
        <h2>Savatda hozircha mahsulot yoʻq</h2>
        <p>Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping</p>
        <NavLink to={"/"}>
            <button>Boshqa sahifa</button>
        </NavLink>

    </div>
  )
}

export default CartEmpty