import React from 'react'
import "./NavbarContainer.css"
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoMenu, IoSearch, IoHomeOutline } from "react-icons/io5";
import { NavLink, useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const wishes = useSelector(s=> s.wishes.value)
    const cart = useSelector(s=> s.cart.value)
    const { pathname } = useLocation()
    if(pathname.includes("login")){
        return<></>
    }
    
    return (
        <div className='container navbar'>
            
            <NavLink to={"/"} className="navbar__logo">
                {/* <img src="" alt="" /> */}
                <h2>uzum market</h2>
            </NavLink>
            <button className='navbar__btn-category'>
                <IoMenu/>
                <span>Katalog</span>
            </button>
            <div className="navbar__search">
                <input type="search" placeholder='Qidirish...' />
                <button><IoSearch/></button>
            </div>
            <div className="navbar__collection">
                <ul className="navbar__collection">
                <li className='navbar__item'>
                    <NavLink to={"/"} className="navbar__link">
                        <IoHomeOutline/>
                        <span>asosiy sahifa</span>
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink to={"/login"} className="navbar__link">
                        <FaRegUser/>
                        <span>Kirish</span>
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink to={"/wishis"} className="navbar__link">
                        <FaRegHeart/>
                        <span>Sevimlilar <sup>{wishes.length}</sup></span>
                        
                        
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink to={"/cart"} className="navbar__link">
                        <IoCartOutline/>
                        <span>Savatcha <sup>{cart.length}</sup> </span>
                    </NavLink>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar