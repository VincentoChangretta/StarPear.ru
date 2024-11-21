import React from 'react';
import './PrivacyPolicy.css'
import { Link } from 'react-router-dom';
import { Checkbox } from '../ui/Checkbox';

export const PrivacyPolicy = ({ sendError }) => {
    return (
        <div className={sendError ? 'privacy-policy active' : 'privacy-policy'}>
            <label >
                <p>Я согласен с <Link className='link' to="/privacy-policy">политикой обработки персональных данных</Link></p>
                <Checkbox value="Да" />
            </label>
        </div>
    );
}
