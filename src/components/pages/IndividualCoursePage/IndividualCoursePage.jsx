import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import './CoursePageStyles.css';
import { Link } from 'react-router-dom';
import { philosophy } from '../../../../img';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const IndividualCoursePage = () => {
   useScrollToTop();
   return (
      <section className="section-with-padding">
         <div className="container">
            <div className="course-inner">
               <div className="course-title-box">
                  <div className="course-img">
                     <img className="img" src={philosophy} alt="Философия" />
                  </div>
                  <h2>Индивидуальный формат проведения</h2>
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
                           Более подробная биография
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

                  <Accordion className="course-accordion">
                     <AccordionSummary className="summary">
                        Навыки построения своих мыслей и рассуждений
                     </AccordionSummary>
                     <AccordionDetails className="details">
                        <ul className="gic__list">
                           <li>Сможете аргументированно отстаивать свою точку зрения в спорах.</li>
                           <li>Сможете применять философские концепции для анализа современных событий и трендов.</li>
                        </ul>
                     </AccordionDetails>
                  </Accordion>
               </div>
               <div className="course-questions">
                  <div className="text">
                     <h4>Как мы этого достигнем?</h4>
                     <ol className="gic__list">
                        <li>Вы узнаете как формировался взгляд на мир от древних времён до современности</li>
                        <li>Вы прочтете важные философские работы</li>
                        <li>Вы сможете дискутировать с другими моими учениками, в Сообществе "Мысль"</li>
                        <li>Я буду следить за тем как вы постепенно саморазвиваетесь</li>
                     </ol>
                  </div>
                  <div className="text">
                     <h4>Как проходят занятия.</h4>
                     <ol className="gic__list">
                        <li>В одной группе находится до 12 человек, на занятии я успеваю уделить время каждому.</li>
                        <li>
                           Каждое занятие делится на лекционную часть, в которой я объясняю вам материал, и
                           дискуссионную часть, в которой мы обсуждаем заранее прочитанный вами текст.
                        </li>
                        <li>
                           В среднем занятие длится 1.5 - 2 часа, и проходит один раз в неделю. При желании занятия
                           также можно проводить два раза в неделю.
                        </li>
                        <li>В процессе курса мы изучим все основные философские концепции в Европе.</li>
                        <li>Все занятия проходят дистанционно в Google Meet, или его альтернативе при надобности.</li>
                        <li>
                           Занятия проводятся лично мной, по заранее заготовленным мной материалам, которые я вам
                           впоследствии предоставлю, вместе с аудиозаписью занятия.
                        </li>
                     </ol>
                  </div>
               </div>
               <div>
                  <div className="text">
                     <h4>Программа занятий</h4>
                     <p>
                        В процессе курса мы изучим все основные философские концепции в Европе. Ниже приведена
                        стандартная программа курса, по вашему желанию её можно дополнить или изменить.
                     </p>
                  </div>

                  <div className="course-accordion-box">
                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по периоду Досократиков</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Как появилась философия в Европе</li>
                              <li>Первые объяснения греками окружающего мира</li>
                              <li>Все известные досократические школы</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по периоду Сократиков</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Кто такой Сократ</li>
                              <li>Изменение вектора философии в сторону более абстрактных понятий</li>
                              <li>Все известные сократические школы</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по периоду эллинистической философии
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>
                                 Формирование особого жизненного мировоззрения стоиков, эпикурейцев и неопифагорейцев
                              </li>
                              <li>
                                 Отход от сократических идей, пересмотр своей философии платониками и перипатетиками
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по средневековой философии</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Феномен религиозного мировоззрения</li>
                              <li>Как появилось Христианство</li>
                              <li>Чем вообще занимались философы в Средневековье, и почему его так не любят</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по философии Эпохи возрождения</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Что такое гуманизм на самом деле</li>
                              <li>Что они “возродили”</li>
                              <li>Появление светской философии</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по философии рационалистов</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Зарождение идеализма Декарта</li>
                              <li>Пантеизм Спинозы</li>
                              <li>Объяснение природных явлений Паскалем и Лейбницем</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии английских эмпиристов и французских просветителей
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Зарождение современного научного метода</li>
                              <li>Идеи отделения от церкви, первые обоснования атеизма</li>
                              <li>Философские обоснования современного республиканского строя</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по философии Иммануила Канта</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Критика как метод</li>
                              <li>Категорический императив и императивная этика</li>
                              <li>Структура сознания по Канту</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии Иоганна Готлиба Фихте и Йозефа Шеллинга
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Появление философии науки</li>
                              <li>Мироустройство Фихте и Шеллинга</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии Георга Фридриха Вильгельма Гегеля
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Философия истории, что её двигает</li>
                              <li>Философия природы, как появилась наша вселенная</li>
                              <li>Что такое дух Гегеля</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии Кьеркегора, Шопенгауэра и Ницше
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Зарождение экзистенциализма</li>
                              <li>
                                 Депрессивная философия Ницше и Шопенгауэра, и объяснение почему она не депрессивна
                              </li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по позитивистам и неокантианцам</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Попытка позитивистов сделать философию научной дисциплиной</li>
                              <li>Возвращение к Канту, неокантианцами</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Первое занятие по аналитической философии
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Вклад Рассела в философию, начало аналитической философии</li>
                              <li>Исследование языка с точки зрения философии</li>
                              <li>Нелинейность и непоследовательность научного прогресса</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии структуралистов и постструктуралистов
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Объяснение метода, при помощи которого я создаю свои ролики</li>
                              <li>Трактование искусства</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии прагматистов, утилитаристов и интуитивистов
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Утилитаристская этика</li>
                              <li>Что такое “прагматическая точка зрения”?</li>
                              <li>Интуитивизм как новый метод</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии Гуссерля и Хайдеггера
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Бытие по Хайдеггеру</li>
                              <li>Сознание по Гуссерлю</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">
                           Занятие по философии атеистических экзистенциалистов Сартра и Камю
                        </AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Жизнь с точки зрения Сартра и Камю</li>
                              <li>Экзистенциальный метод познания</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>

                     <Accordion className="course-accordion">
                        <AccordionSummary className="summary">Занятие по русской философии</AccordionSummary>
                        <AccordionDetails className="details">
                           <ul className="gic__list">
                              <li>Самобытность русской философии</li>
                           </ul>
                        </AccordionDetails>
                     </Accordion>
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
                     <li>Цена одного занятия в индивидуальном слоте - 2000₽≈21€</li>
                     <li>
                        Цена одного занятия в индивидуальном слоте с своим знакомым с которым вы хотите заниматься
                        вместе - 3000₽
                     </li>
                     <li>При оплате от четырех занятий включительно скидка 10%, вы заплатите не 8000₽ а 7200₽</li>
                     <li>
                        После полного прохождения курса или оплаты 18 занятий, предоставляется вечный доступ в
                        Сообщество "Мысль”
                     </li>
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
