import React, { useEffect, useRef, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { logo } from '../../../img.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {
    const [activeNav, setActiveNav] = useState(false)
    const navRef = useRef(null)
    useEffect(() => {
        const closeNavigation = e => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveNav(false)
            }
        }
        document.addEventListener("click", closeNavigation)
        return () => document.removeEventListener("click", closeNavigation)
    }, [activeNav])

    const handleActiveNav = e => {
        e.stopPropagation()
        setActiveNav(true)
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="header__inner">
                    <Link className='logo' to="/">
                        <img src={logo} alt="логотип" />
                    </Link >
                    <div className="burger" onClick={handleActiveNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <nav className={activeNav ? 'list-bg active' : 'list-bg'}></nav>
                    <ul ref={navRef} className={activeNav ? 'list active' : 'list'}>
                        <li>
                            <Link to="/" onClick={() => setActiveNav(false)}>Главная</Link>
                        </li>
                        <li>
                            <Link to="/courses" onClick={() => setActiveNav(false)}>Курсы</Link>
                        </li>
                        <li>
                            <Link to="/community" onClick={() => setActiveNav(false)}>«Мысль»</Link>
                        </li>
                        <li>
                            <Link to="/biography" onClick={() => setActiveNav(false)}>Биография</Link>
                        </li>
                        <li>
                            <Link to="/social-media" onClick={() => setActiveNav(false)}>Социальные сети</Link>
                        </li>
                        <li className='btn-order'>
                            <Link className='btn' to="/registration" onClick={() => setActiveNav(false)}>Записаться</Link>
                        </li>
                        <li className='close'>
                            <FontAwesomeIcon icon={faXmark} onClick={() => setActiveNav(false)} />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
