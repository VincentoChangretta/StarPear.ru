import React, { useEffect, useState } from 'react';
import './CoursesCard.css'
import { Link } from 'react-router-dom';
export const CoursesCard = ({ course }) => {

    const [slicedText, setSlicedText] = useState(course.text)

    useEffect(() => {
        const sliceText = () => {
            if (innerWidth < 600) {
                const dotIndex = course.text.indexOf(".")
                const newText = course.text.slice(0, dotIndex) + '...'
                setSlicedText(newText)
            }
        }
        sliceText()
        window.addEventListener("resize", sliceText)
        return () => window.removeEventListener("resize", sliceText)
    }, [])



    return (
        <article className='courses-card'>
            <div className='img-box'>
                <img src={course.img} alt="курсы" />
            </div>
            <div className="text-box">
                <h4>{course.title}</h4>
                {typeof course.price === 'object'
                    ? <p>{course.price.min + '₽' + '–' + course.price.max + '₽'} – занятие</p>
                    : <p>{course.price + '₽'} – занятие</p>
                }
                <p className='text-box__description'>{slicedText}</p>
                <Link to={course.link} className='btn'>Подробнее</Link>
            </div>
        </article>
    );
}
