import React from 'react';
import './Community.css'
import { misl, telegram, phone } from '../../../../img';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const Community = () => {

    useScrollToTop()

    return (
        <section className='community section-with-padding'>
            <div className="container">
                <section className="community__header">
                    <div className="text">
                        <h1>Сообщество «Мысль»</h1>
                        <p>Сообщество “Мысль” это клуб людей активно интересующихся философией, в нем состоят как новички так и опытные философы занимающиеся философией на протяжении нескольких лет
                        </p>
                    </div>
                    <div className='community__header-img'>
                        <img className='img' src={misl} alt="Сообщество Мысль" />
                        <img className='img telegram' src={telegram} alt="Телеграм" />
                    </div>
                </section>
                <section className='community__info'>
                    <div className='community__info-img'>
                        <img src={phone} alt="" className="img" />
                    </div>
                    <div className="text">
                        <h2>Что представляет из себя сообщество?</h2>
                        <p>Сообщество “Мысль” базируется на закрытом телеграмм-чате, в котором постоянно проходят обсуждения разных философских взглядов. Также несколько раз в месяц в данном чате проходят лекции и семинары по различным научным тематикам во время которых есть возможность пообщаться с лектором напрямую.</p>
                        <p>Расписание лекций публикуется в мой ТГК:
                            <a className='link' href='https://t.me/starpear1724' target='_blank'>4я книга науки логики</a>
                        </p>
                    </div>
                </section>
                <section className='community__advantages'>
                    <div className="community__advantages-advantages">
                        <h3>Преимущества членства в Сообществе «Мысль»:</h3>
                        <ul>
                            <li>— Здоровая дискуссия благодаря модерации.</li>
                            <li>— Отсутствие ограничений на количество сообщений.</li>
                            <li>— Возможность получения консультаций области философии.</li>
                            <li>— Общение с лекторами во время живых лекций. Лектором Сообщества «Мысль» является Никитин Матвей, но также планируется приглашать и других известных личностей.</li>
                            <li>— Регулярное проведение активностей, включая лекции и общение в чате. Участники могут предлагать свои идеи, которые обязательно будут рассмотрены.</li>
                        </ul>
                    </div>
                    <div className="community__advantages-price">
                        <h3>Цены</h3>
                        <p>Один месяц членства стоит <strong>500₽/6€</strong></p>
                        <p>Для тех кто занимается на моих курсах членство в сообществе - бесплатное</p>
                        <p>Для тех кто полностью прошел мои курсы - членство в сообществе бесплатное навсегда</p>
                        <Link
                            className='btn'
                            to="/registration"
                            state={{ from: 'Вступить в сообщество «Мысль»' }}
                        >
                            Подать заявку
                        </Link>
                    </div>
                </section>
            </div>
        </section>
    );
}
