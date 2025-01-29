import React, { useEffect, useState } from "react";
import "./CoursePage.css";
import { coursesImg } from "../../../../../img";
import {
  coursesGroupData,
  coursesIndividualData,
  coursesOriginalData,
} from "../../../../../data";
import { Link, useLocation } from "react-router-dom";
import {
  COURSE_GROUP_PATHNAME,
  COURSE_INDIVIDUAL_PATHNAME,
  COURSE_ORIGINAL_PATHNAME,
} from "../../../../../const";
import useScrollToTop from "../../../../hooks/UseScrollToTop";

export const CoursePage = () => {
  const data = useLocation();
  const [courseData, setCourseData] = useState(null);
  const pathName = data.pathname.replace("/", "");
  useEffect(() => {
    if (pathName === COURSE_GROUP_PATHNAME) {
      setCourseData(coursesGroupData);
    } else if (pathName === COURSE_INDIVIDUAL_PATHNAME) {
      setCourseData(coursesIndividualData);
    } else if (pathName === COURSE_ORIGINAL_PATHNAME) {
      setCourseData(coursesOriginalData);
    }
  }, []);
  useScrollToTop();

  if (!courseData) {
    return null;
  }

  return (
    <section className="course-page section-with-padding">
      <div className="container">
        <div className="course-page__inner">
          <h2>{courseData.title}</h2>
          <section className="course-page__info section__box">
            <div className="text">
              <h3>Краткое описание Курса</h3>
              {courseData.description.map((item) => {
                const key = item.slice(0, 5) + Math.random();
                return <p key={key}> {item}</p>;
              })}
              <Link
                to="/registration"
                className="btn"
                state={{ from: courseData.id }}
              >
                Записаться
              </Link>
            </div>
            <div className="course-page__inner-img">
              <img
                className="img"
                src={courseData.img}
                alt={courseData.imgAlt}
              />
            </div>
          </section>
          <section className="course-page__programm section__box">
            {pathName === COURSE_ORIGINAL_PATHNAME ? null : (
              <div className="course-page__programm-img">
                <img
                  className="img"
                  src={coursesImg}
                  alt="курсы по философии"
                />
              </div>
            )}

            <ol
              className={
                pathName === COURSE_ORIGINAL_PATHNAME
                  ? "course-page__programm-list-grid"
                  : "course-page__programm-list"
              }
            >
              {courseData.programm.map((arrayItem) => {
                if (pathName === COURSE_ORIGINAL_PATHNAME) {
                  return (
                    <li
                      className="course-page__programm-list-grid-item"
                      key={arrayItem.id}
                    >
                      <h5>{arrayItem.title}</h5>
                      <ul>
                        {arrayItem.list.map((item) => {
                          const key = item.slice(0, 5) + Math.random();
                          return <li key={key}>— {item}</li>;
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return <li key={arrayItem.id}>— {arrayItem.text}</li>;
                }
              })}
              <li>
                {pathName === COURSE_ORIGINAL_PATHNAME ? null : (
                  <h4>Итого: {courseData.programmTotal}</h4>
                )}
              </li>
            </ol>
          </section>
          {pathName === COURSE_ORIGINAL_PATHNAME ? (
            <section>
              <h4>
                На самом деле тут не все темы, а скорее те которые я вспомнил и
                смог как-то назвать) <br /> Так что в любом случае уточняйте в
                телеграме.
              </h4>
            </section>
          ) : null}
          <section className="course-page__process section__box">
            <h2>Процесс обучения</h2>
            {courseData.process.map((item) => {
              const key = item.slice(0, 5) + Math.random();
              return <p key={key}>{item}</p>;
            })}
          </section>
          <section className="course-page__price section__box">
            <h2>Цена</h2>
            {courseData.prices.map((item) => {
              const key = item.slice(0, 5) + Math.random();
              return <p key={key}>{item}</p>;
            })}
          </section>
          <Link to="/registration" className="btn">
            Записаться
          </Link>
        </div>
      </div>
    </section>
  );
};
