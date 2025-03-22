import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import './CoursePageStyles.css';
import { Link } from 'react-router-dom';
import { philosophy } from '../../../../img';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const OriginalCoursePage = () => {
   useScrollToTop();
   return (
      <section className="section-with-padding">
         <div className="container">
            <div className="course-inner">
               <div className="course-title-box">
                  <div className="course-img">
                     <img className="img" src={philosophy} alt="Философия" />
                  </div>
                  <h2>Потоковый формат проведения занятий</h2>
                  <h4 className="smallTitle">Что даст вам мой курс?</h4>
               </div>
               <div className="course-accordion-box">
                  <Accordion className="course-accordion">
                     <AccordionSummary className="summary">
                        Возможность разобраться в себе и обрести собственное мировоззрение
                     </AccordionSummary>
                     <AccordionDetails className="details">
                        <ul className="gic__list">
                           <li>Научитесь выпутываться из кризисных ситуаций.</li>
                           <li>Вас больше не будет изучать проблемы выбора.</li>
                        </ul>
                     </AccordionDetails>
                  </Accordion>

                  <Accordion className="course-accordion">
                     <AccordionSummary className="summary">
                        Мое личное сопровождение в изучении философии
                     </AccordionSummary>
                     <AccordionDetails className="details">
                        <p style={{ marginBottom: '10px' }}>Пару слов обо мне:</p>
                        <ul className="gic__list">
                           <li>7 лет изучаю философию и веду по ней занятия.</li>
                           <li>4 года веду свой блог по философии.</li>
                           <li>2 года преподаю платные занятия.</li>
                        </ul>
                        <p>
                           Более подробная биография{' '}
                           <Link className="course-link" to="/biography">
                              в этом разделе
                           </Link>
                        </p>
                     </AccordionDetails>
                  </Accordion>

                  <Accordion className="course-accordion">
                     <AccordionSummary className="summary">
                        Способность ориентироваться во всех направлениях философии
                     </AccordionSummary>
                     <AccordionDetails className="details">
                        <ul className="gic__list">
                           <li>Сможете самостоятельно изучить большинство текстов по философии.</li>
                           <li>
                              Поймете, как читать сложные книги, касающиеся любой научной дисциплины, не только
                              философии.
                           </li>
                        </ul>
                     </AccordionDetails>
                  </Accordion>
               </div>
               <div className="course-questions">
                  <div className="text">
                     <h4>Как мы этого достигнем?</h4>
                     <ol className="gic__list">
                        <li>Вы узнаете о всех самых известных философских концепциях</li>
                        <li>Вы узнаете историю философии с античности вплоть до современности</li>
                        <li>Вы получите актуальные знания о философии как науке</li>
                     </ol>
                  </div>
                  <div className="text">
                     <h4>Как проходят занятия.</h4>
                     <ol className="gic__list">
                        <li>
                           Я буду давать вам лекции по философии, в процессе которой буду останавливаться и отвечать на
                           вопросы из часа
                        </li>
                        <li>Одно занятия будет длиться максимум 1.5 часа.</li>
                        <li>
                           Занятия будут проводится мной, по заранее заготовленным материалам. После занятия я буду
                           предоставлять вам презентацию и аудиозапись.
                        </li>
                     </ol>
                  </div>
               </div>
               <div>
                  <div className="text">
                     <h4>Программа занятий</h4>
                     <p>В процессе курса мы изучим все основные философские концепции в Европе</p>
                     <ol className="tiv__list">
                        <li> Лекция по античной философии. Часть</li>
                        <li>Лекция по античной философии Часть 2</li>
                        <li>Лекция по философии Средневековья и Эпохи возрождения</li>
                        <li>Лекция по Философии Нового времени</li>
                        <li>Лекция по Немецкой классической философии</li>
                        <li>Лекция по Философии второй половины 19го века</li>
                        <li>Лекция по Аналитической философии</li>
                        <li>Лекция по атеистическому экзистенциализму</li>
                     </ol>
                  </div>
               </div>

               <div className="text">
                  <p>
                     На Яндекс музыке, есть подкаст с записью моих трансляций, иногда я провожу их со своими учениками.
                     (ссылка на страницу с соцсетями)
                  </p>
                  <p>
                     Также первое ознакомительное занятие на курсе является бесплатным. На нем я отвечу на ваши вопросы,
                     расскажу чем мы будем заниматься, и просто познакомимся.
                  </p>
               </div>
               <div className="text">
                  <Link to="/registration">
                     <h4 className="link">Отзывы вот тут</h4>
                  </Link>
               </div>
               <div className="text">
                  <h4>Цены:</h4>
                  <ol className="gic__list">
                     <li>Цена одного занятия в потоке 500₽</li>
                     <li>При оплате полного курса скидка 10%, вы заплатите не 4000₽ а 3600₽</li>
                  </ol>
               </div>
               <Link to="/registration" className="btn">
                  Запись
               </Link>
            </div>
         </div>
      </section>
   );
};
