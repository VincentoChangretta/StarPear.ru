import React from 'react';
import './Feedbacks.css';
import { feedbacksData } from '../../../../data';
import { Feedback } from './feedback/FeedBack';
import useScrollToTop from '../../../hooks/UseScrollToTop';

export const Feedbacks = () => {
   useScrollToTop();
   return (
      <section className="section-with-padding feedbacks">
         <div className="container">
            <h2 className="feedbacks__title">Отзывы</h2>
            <div className="feedbacks__box">
               {feedbacksData.map(feedback => (
                  <Feedback key={feedback.id} data={feedback} />
               ))}
            </div>
            <div>
               <h3 className="your-feedback">Тут может быть и ваш отзыв!</h3>
            </div>
         </div>
      </section>
   );
};
