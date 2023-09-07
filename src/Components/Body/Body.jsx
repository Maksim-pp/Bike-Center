import React from 'react'
import style from './Body.module.css'
import Banners from './Banners/Banners'
import TextInfo from './TextInfo/TextInfo'

function Body() {
    return (
        <div className={style.block}>
            <div className={style.info}>
                <div className={style.block__tab}>Главная страница / <span className={style.tab}>Помощь</span></div>
                <div className={style.block__numb}>Телефон горячей линии <span className={style.numb}>8 (800) 500-30-20</span></div>
            </div>
            <Banners />
            <TextInfo />
        </div>
    )
}

export default Body