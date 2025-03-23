import React from 'react';
import './Feedback.css';

export const Feedback = ({ data }) => {
   return (
      <article className='feedback'>
         <div className='feedback__img'>
            <img className='img' src={data.img} alt="avatar" />
         </div>
         <h4 className='feedback__name'>{data.name}</h4>
         <ul className='feedback__list'>
            {data.textes.map((text, index) => (
               <li key={index}>{text}</li>
            ))}
         </ul>
      </article>
   );
};
