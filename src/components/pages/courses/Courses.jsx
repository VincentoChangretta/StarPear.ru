import React from 'react';
import './Courses.css';
import { coursesData } from '../../../../data';
import { CoursesCard } from './CoursesCard';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const Courses = () => {
    useScrollToTop();

    return (
        <section className="courses section-with-padding">
            <div className="container">
                <div className="courses__inner">
                    <h2>Выберите подходящий формат занятий</h2>
                    <div className="courses-box">
                        {coursesData.map(item => (
                            <CoursesCard key={item.id} course={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
