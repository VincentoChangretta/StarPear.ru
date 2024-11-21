import './MainTop.css'
import { Link } from 'react-router-dom';
import { MainTopSlider } from './MainTopSlider';
import { useEffect, useState } from 'react';

export const MainTop = () => {




    return (
        <section className='main-top' >
            <div className="container">
                <MainTopSlider />
                <div className="main-top__inner">
                    <div className='main-top__inner-box'>
                        <h1>Никитин Матвей</h1>
                        <p>Блогер, преподаватель философии, автор просветительских каналов</p>
                        <div className='main-top__inner-btns'>
                            <Link className='coursesBtn btn' to="/courses">Курсы по философии</Link >
                            <a href="game.html" className='toGame btn'>Философская игра</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
