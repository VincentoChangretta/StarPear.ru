import React from 'react';
import './Main.css'
import { MainTop } from './MainTop';
import { Info } from './Info';
import { CourseInfo } from './CourseInfo';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const Main = () => {
    useScrollToTop()
    return (
        <>
            <MainTop />
            <Info />
            <CourseInfo />
        </>
    );
}
