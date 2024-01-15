import React from 'react'
import "./Footer.css"
import { FaApple, FaFacebook, FaGooglePlay, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer container'>
            <div className="footer__wrapper ">
                <div className="footer__card">
                    <h3>Biz haqimizda</h3>
                    <ul className="footer__collection">
                        <li className="footer__collection-item ">
                            Topshirish punktlari
                        </li>
                        <li className="footer__collection-item ">
                            Vakansiyalar
                        </li>
                    </ul>
                </div>
                <div className="footer__card">
                    <h3>Foydalanuvchilarga</h3>
                    <ul className="footer__collection">
                        <li className="footer__collection-item ">
                            Biz bilan bogʻlanish
                        </li>
                        <li className="footer__collection-item ">
                            Savol-Javob
                        </li>
                    </ul>
                </div>
                <div className="footer__card">
                    <h3>Tadbirkorlarga</h3>
                    <ul className="footer__collection">
                        <li className="footer__collection-item ">
                            Uzumda soting
                        </li>
                        <li className="footer__collection-item ">
                            Sotuvchi kabinetiga kirish
                        </li>
                    </ul>
                </div>
                <div className='footer__icon'>
                    <h3>Uzum ijtimoiy tarmoqlarda</h3>
                    <div className="footer__icon-network">
                        <a href="" className='footer__network-instagram'><FaInstagram /></a>
                        <a href="" className='footer__network-telegram'><FaTelegram /></a>
                        <a href="" className='footer__network-youtube'><FaYoutube /></a>
                        <a href="" className='footer__network-facebook'><FaFacebook /></a>
                    </div>
                </div>
                <div className="footer__app-dowloand">
                    <h4>Ilovani yuklab olish</h4>
                    <div className="footer__dowloand">
                        <div className="footer__googleplay">
                            <span>
                                <FaGooglePlay />
                            </span>
                            <h4>GooglePlay</h4>
                        </div>
                        <div className="footer__apstore">
                            <span>
                                <FaApple />
                            </span>
                            <h4>Apstore</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer