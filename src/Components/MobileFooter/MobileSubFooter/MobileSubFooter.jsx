import React from 'react'
import style from './MobileSubFooter.module.css'
import Email from '../../../assets/image/Email.png'

function MobileSubFooter() {
    return (
        <div className={style.block}>
            <div>
                © 2022 <br />
                Интернет-магазин "Байк Центр" ® <br />
                bike-сentre.ru
            </div>
            <div>
                <img src={Email} alt="" />
            </div>
        </div>
    )
}

export default MobileSubFooter