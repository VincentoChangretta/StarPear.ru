import React, { createContext, useRef, useState } from 'react';
import './Registration.css'
import { formImg } from '../../../../img';
import { Input } from '../../ui/Input';
import { FormSelect } from './FormSelect';
import { formSelectData } from '../../../../data';
import { PrivacyPolicy } from '../../global/PrivacyPolicy';
import { handleSubmit } from '../../../../script';
import { useLocation } from 'react-router-dom';
import useScrollToTop from '../../../hooks/UseScrollToTop';

const programmVerify = ['Да', 'Нет']
export const formCheckedContext = createContext('no provider')

export const Registration = () => {
    const location = useLocation()
    const fromPage = location.state?.from
    const [activeIndex, setActiveIndex] = useState(null)
    const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false)
    const [sendError, setSendError] = useState(false)
    const [fetchDescr, setFetchDescr] = useState(false)
    const formRef = useRef(null)
    const handleActiveSelect = index => {
        setActiveIndex(prev => (prev === index ? null : index))
    }
    useScrollToTop()

    return (
        <section className='registration section-with-padding'>
            <div className="container">
                <div className="registration__inner">
                    <h2>Запись</h2>
                    <p>Заполните форму, чтобы записаться на курсы или вступить в собщество "Мысль"</p>
                    <form
                        ref={formRef}
                        onSubmit={e => handleSubmit(e, formRef.current, setFetchDescr, isCheckedPrivacy, sendError, setSendError)}
                    >
                        {/* Hidden Required Fields  */}
                        <input type="hidden" name="project_name" value="info@starpear.ru" />
                        <input type="hidden" name="admin_email" value="starpear1724@gmail.com" />
                        <input type="hidden" name="form_subject" value="uniForm" />
                        {/*  END Hidden Required Fields --> */}
                        <div className='form__img'>
                            <img className="img" src={formImg} alt="письмо фото" />
                        </div>
                        <div className="form__inputs">
                            <Input name="Имя" type="text" labelText="Как мне вас называть?" placeholder="Иван" />
                            <Input name="Телеграм" type="text" labelText="Ваш тег в телеграме" placeholder="@ivan" />
                            <div>
                                <h4>Какая форма занятий вас интересует?</h4>
                                <FormSelect
                                    fromPage={fromPage}
                                    name="Форма-занятий"
                                    data={formSelectData}
                                    isActive={activeIndex === 0}
                                    onToggle={() => handleActiveSelect(0)}
                                />
                            </div>
                            <div>
                                <h4>Ознакомлены ли вы с программой?</h4>
                                <FormSelect
                                    name="Ознакомлены-ли-с-программой?"
                                    data={programmVerify}
                                    isActive={activeIndex === 1}
                                    onToggle={() => handleActiveSelect(1)}
                                />
                            </div>
                            <formCheckedContext.Provider value={{ isCheckedPrivacy, setIsCheckedPrivacy }}>
                                <PrivacyPolicy sendError={sendError} />
                                <button type='submit' className='btn'>Записаться</button>
                            </formCheckedContext.Provider>
                            <p className={fetchDescr ? 'fetch-success-description active' : 'fetch-success-description'}>Заявка успешно отправлена!</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
