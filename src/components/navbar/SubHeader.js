import React from 'react'
import "./NavbarContainer.css"
import { useLocation } from 'react-router-dom';

function SubHeader() {
  const { pathname } = useLocation()
    if(pathname.includes("login")){
        return<></>
    }
  return (
    <div className='sub__header'>
        <div className="container sub__header-wrapper">
            <p>Shahar Namangan</p>
            <p>Buyurtma 1 kunda bepul yetkazib beramiz</p>
            <p>Savol-javoblar. Buyurtmalar. Uzbek</p>
        </div>
    </div>
  )
}

export default SubHeader