import React from 'react';
import './Social.css'
import { telegram, tiktok, yandex, youtube } from '../../../../img';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const Social = () => {
    useScrollToTop()
    return (
        <section className='social section-with-padding'>
            <div className="container">
                <h2>Социальные сети</h2>
                <div className="social__inner">
                    <div className="social__inner-img">
                        <a href="https://www.tiktok.com/@starpear1770?_t=8l6gbIiLs8X&_r=1" target='_blank'>
                            <img src={tiktok} alt="tiktok" className="img" />
                            <h3>Тикток</h3>
                        </a>
                    </div>
                    <div className="social__inner-img">
                        <a href="https://t.me/starpear1724" target='_blank'>
                            <img src={telegram} alt="telegram" className="img" />
                            <h3>Телеграм</h3>
                        </a>
                    </div>
                    <div className="social__inner-img">
                        <a href="https://www.youtube.com/@starpear-sd8mu" target='_blank'>
                            <img src={youtube} alt="youtube" className="img youtube" />
                            <h3>Ютуб</h3>
                        </a>
                    </div>
                    <div className="social__inner-img">
                        <a href="https://music.yandex.ru/users/yamusic-episodes/playlists/2224462?utm_medium=copy_link" target='_blank'>
                            <img src={yandex} alt="yandex" className="img" />
                            <h3>Яндекс подкаст</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
