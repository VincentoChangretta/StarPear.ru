import React, { useEffect, useState } from 'react';
import './Info.css';
import { Link } from 'react-router-dom';
import infoSliderData from '../../../../infoSlider';


export const Info = () => {
    const [index, setIndex] = useState(0);
    const [activeSliderElement, setActiveSliderElement] = useState(infoSliderData[0]);

    useEffect(() => {
        const infoSliderInt = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % infoSliderData.length);
        }, 5000);

        return () => clearInterval(infoSliderInt);
    }, []);

    useEffect(() => {
        setActiveSliderElement(infoSliderData[index]);
    }, [index]);

    const changeSliderElement = (id) => {
        const clickedElIndex = infoSliderData.findIndex(item => item.id === id);
        if (clickedElIndex !== -1) setIndex(clickedElIndex);
    };

    const renderBodyContent = () => {
        if (Array.isArray(activeSliderElement.body)) {
            return (
                <div className='info-slider-link-box'>
                    {activeSliderElement.body.map(item => (
                        <a
                            className={'info-slider-link' + ' ' + item.id}
                            key={item.id}
                            href={item.link}
                            target='_blank'
                        >
                            {item.service}:
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>
            )
        } else {
            const isLongText = activeSliderElement.body.length > 200;
            const displayText = isLongText ? activeSliderElement.body.slice(0, 250) + '...' : activeSliderElement.body;

            return (
                <p>
                    {displayText}
                    {isLongText && (
                        <Link style={{ textDecoration: 'underline' }} to={activeSliderElement.link}>
                            еще
                        </Link>
                    )}
                </p>
            );
        }
    };

    return (
        <section className='info'>
            <div className="container">
                <div className="info__inner">
                    <div className="info__inner-slider">
                        <ul className="info__list">
                            {infoSliderData.map(item => (
                                <li
                                    key={item.id}
                                    onClick={() => changeSliderElement(item.id)}
                                    className={`info__list-item ${activeSliderElement.id === item.id ? 'active' : ''}`}
                                >
                                    <p>{item.title}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="info__inner-slider-window">
                            <h3>{activeSliderElement.title}</h3>
                            {renderBodyContent()}
                            <Link to={activeSliderElement.link} className='btn'>Перейти</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
