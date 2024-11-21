import React from 'react';
import './CourseInfo.css'
import { thinker } from '../../../../img';
import { Link } from 'react-router-dom';

export const CourseInfo = () => {
    return (
        <section className='course-info'>
            <div className="container">
                <div className="course-info__inner">
                    <div className="course-info__img">
                        <img src={thinker} alt="мыслящий-фото" />
                    </div>
                    <div className="text">
                        <h2>Как проходят курсы?</h2>
                        <p>
                            Курс по философии предлагает слушателям глубокое понимание основных философских школ и направлений, начиная с Древней Греции и заканчивая современностью. Особенностью курса является его структурированность и логичность. Каждый блок занятий посвящён определённой эпохе или направлению, что позволяет слушателям получить полное представление о развитии философской мысли. После полного прохождения данного курса вы сможете изучить любое существующее на данный момент философское направление.
                        </p>
                        <div className="course-info__buttons">
                            <Link to="/registration" className='btn'>Записаться</Link>
                            <Link to="/courses" className='btn'>Подробнее о курсах</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
