import React, { useContext } from 'react';
import './Checkbox.css'
import { formCheckedContext } from '../pages/registraion/Registration';

export const Checkbox = ({ value }) => {

    const { setIsCheckedPrivacy } = useContext(formCheckedContext)

    const handleCheckboxChange = e => {
        setIsCheckedPrivacy(e.target.checked)
    }

    return (
        <label>
            <input className='checkbox' type="checkbox" value={value} onChange={handleCheckboxChange} />
            <span className='check-style'></span>
        </label>
    );
}
