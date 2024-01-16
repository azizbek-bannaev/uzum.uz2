import React from 'react'
import wishesemptyimg from "../../assets/hearts.cf414be.png"
import { NavLink } from 'react-router-dom' 
import "./Empty.css"
function Empty() {
  return (
    <div className='empty container'>
        <img src={wishesemptyimg} alt="" />
        <h2>Sizga yoqqanini qoʻshing</h2>
        <p>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
        <NavLink to={"/"}>
            <button>Akkauntga qo'shish</button>
        </NavLink>

    </div>
  )
}

export default Empty