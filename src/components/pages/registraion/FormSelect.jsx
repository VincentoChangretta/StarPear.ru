import React, { useEffect, useRef, useState } from 'react';
import './FormSelect.css';
import { Input } from '../../ui/Input';

export const FormSelect = ({ fromPage, name, data, isActive, onToggle }) => {
   const [activeItem, setActiveItem] = useState(() => {
      if (fromPage) {
         let findEl = '';

         switch (fromPage) {
            case '/courses-group':
               findEl = 'Коллективный формат';
               break;
            case '/courses-individual':
               findEl = 'Индивидуальный формат';
               break;
            case '/courses-original':
               findEl = 'Потоковый формат';
               break;
            default:
               findEl = data[0];
         }
         if (findEl) {
            return findEl;
         } else {
            return data[0];
         }
      }
      return data[0];
   });
   const selectRef = useRef();
   useEffect(() => {
      const closeSelect = e => {
         if (isActive && selectRef.current && !selectRef.current.contains(e.target)) {
            onToggle();
         }
      };
      document.addEventListener('click', closeSelect);
      return () => document.removeEventListener('click', closeSelect);
   }, [isActive, onToggle]);

   const handleChangeActive = item => {
      onToggle();
      setActiveItem(item);
   };

   return (
      <div className={isActive ? 'form-select active' : 'form-select'}>
         <Input name={name} readOnly={true} type="text" value={activeItem} />
         <div ref={selectRef} className="form-select__active" onClick={onToggle}>
            {activeItem}
         </div>
         <ul className="form-select__list">
            {data.map(item => {
               const key = item.slice(0, 5) + Math.random();
               return (
                  <li key={key} onClick={() => handleChangeActive(item)}>
                     {item}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};
