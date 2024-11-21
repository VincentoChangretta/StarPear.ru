import React from 'react';
import './Footer.css'
import { logo, footerTG, footerTT, footerYD } from '../../../img';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <Link className='logo' to="/">
                        <img src={logo} alt="" />
                    </Link >
                    <ul className="sm-list">
                        <li>
                            <a href='https://t.me/starpear1724' target='_blank'>
                                <img src={footerTG} alt="telegram" />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.tiktok.com/@starpear1770?_t=8l6gbIiLs8X&_r=1' target='_blank'>
                                <img src={footerTT} alt="tiktok" />
                            </a>
                        </li>
                        <li>
                            <a href='https://music.yandex.ru/users/yamusic-episodes/playlists/2224462?utm_medium=copy_link' target='_blank'>
                                <img src={footerYD} alt="yandex" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='vcDevs'> 
                    <a href='https://www.vcdevs.com' target='_blank'>
                        Cайт от <strong>vcDevs</strong>
                    </a>
                </div>
            </div>
        </footer>
    );
}
