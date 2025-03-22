import React from 'react';
import './CoursesCard.css';
import { Link } from 'react-router-dom';
export const CoursesCard = ({ course }) => {
    return (
        <article className="courses-card">
            <div className="img-box">
                <img src={course.img} alt="курсы" />
            </div>
            <div className="text-box">
                <h4>{course.title}</h4>
                <ol className="text-box__list">
                    {course.textes.map((item, index) => (
                        <li key={index} className="text-box__description">
                            {item}
                        </li>
                    ))}
                    <li className="text-box__description">
                        {course.priceText} —{' '}
                        <span className="text-box__description-price">
                            {course.price}
                        </span>
                    </li>
                </ol>
                <Link to={course.link} className="btn">
                    Подробнее
                </Link>
            </div>
        </article>
    );
};
