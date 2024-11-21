import React, { useEffect, useState } from 'react';
import { bg1, bg2, bg3 } from '../../../../img';

const images = [bg1, bg2, bg3]

export const MainTopSlider = () => {
    const [bgImage, setBgImage] = useState(bg1)
    const [opacity, setOpacity] = useState(1)
    useEffect(() => {
        let sliderInt
        let index = 0
        const slider = () => {
            sliderInt = setInterval(() => {
                setOpacity(0)
                setTimeout(() => {
                    index == images.length ? index = 0 : index
                    setBgImage(images[index])
                    setOpacity(1)
                }, 500)

                index++
            }, 10000);
        }
        slider()
        return () => clearInterval(sliderInt)
    }, [images])
    return (
        <div className="main-top__bg" style={{ backgroundImage: `url(${bgImage})`, opacity: opacity }}></div>
    );
}
