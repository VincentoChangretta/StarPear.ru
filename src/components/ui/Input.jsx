import React from 'react';
import './Input.css'

export const Input = ({ readOnly, value, type, labelText, placeholder, name }) => {

    if (readOnly) {
        return (
            <label className='input-label'>
                <h4>{labelText}</h4>
                <div className='input-box'>
                    <input name={name} readOnly type={type} value={value} required />
                </div>
            </label>
        )
    }

    return (
        <label className='input-label'>
            <h4>{labelText}</h4>
            <div className='input-box'>
                <input name={name} type={type} placeholder={placeholder} required />
            </div>
        </label>
    );
}
