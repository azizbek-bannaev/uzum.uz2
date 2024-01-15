import React from 'react'
import "./NavbarContainer.css"
import { useLocation } from 'react-router-dom';

function NavbarBottom() {
  const { pathname } = useLocation()
    if(pathname.includes("login")){
        return<></>
    }

  const ITEMS = [
    "Elektronika",
    "Aksesuarlar",
    "Maishiy texnika",
    "Kiyimlar",
    "Poyabzallar",
    "Go'zallik va buyumlari",
    "Salomatlik",
    "Uy-ro'zg'or buyumlari",
    "Qurilish va tamirlash",
    "Avto tovarlar",
  ]
  return (
    <div className='container'>
      <div className="navbar__bottom">
        {
          ITEMS?.map((el, inx)=> <div className='navbar__bottom-item' key={inx}>
            <p>{el}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default NavbarBottom