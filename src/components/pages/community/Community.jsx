import React from 'react';
import './Community.css';
import { misl, telegram, phone } from '../../../../img';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const Community = () => {
   useScrollToTop();

   return (
      <section className="community section-with-padding">
         <div className="container">
            <section className="community__header">
               <div className="text">
                  <h1>Сообщество «Мысль»</h1>
                  <div className='community__main'>
                     <h4>Сообщество «Мысль» это:</h4>
                     <ol className="gic__list">
                        <li>40 записанных подкастов, число которых регулярно растет</li>
                        <li>Здоровая дискуссия</li>
                        <li>Отсутствие ограничений на количество сообщений</li>
                        <li>Возможность получения консультаций в области философии</li>
                        <li>Общение с лекторами во время живых лекций</li>
                        <li>Регулярное проведение активностей, включая лекции и общение в чате</li>
                        <li>Возможность предложить свое мероприятие</li>
                     </ol>
                  </div>
               </div>
               <div className="community__header-img">
                  <img className="img" src={misl} alt="Сообщество Мысль" />
                  <img className="img telegram" src={telegram} alt="Телеграм" />
               </div>
            </section>
            <section className="community__info">
               <div className="community__info-img">
                  <img src={phone} alt="" className="img" />
               </div>
               <div className="text">
                  <h2 style={{ textAlign: 'left' }}>Что представляет из себя сообщество?</h2>
                  <p>
                     Сообщество “Мысль” базируется на закрытом телеграмм-чате, в котором проходят обсуждения разных
                     философских взглядов. Также в данном чате еженедельно проходят лекции и семинары по различным
                     философским тематикам во время которых есть возможность пообщаться с лектором напрямую.
                  </p>
                  <p>
                     Также мысль это доступ к нескончаемому потоку лекций по философии, даже если вы будете слушать их
                     по полчаса каждый день, то они не будут успевать заканчиваться.s
                  </p>
                  <p>
                     Расписание лекций публикуется в мой ТГК:
                     <a className="link" href="https://t.me/starpear1724" target="_blank">
                        4я книга науки логики
                     </a>
                  </p>
                  <a className="community-btn btn" style={{ maxWidth: '350px' }} href="https://web.tribute.tg/s/nWF">
                     Вступить в Сообщество Мысль
                  </a>
               </div>
            </section>
         </div>
      </section>
   );
};
