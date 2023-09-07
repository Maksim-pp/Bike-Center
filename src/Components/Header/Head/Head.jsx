import React from 'react'
import style from './Head.module.css'
import Location from '../../../assets/image/Group 1592.png'

function Head() {
    return (
        <div className={style.block}>
            <div className={style.block__info}>
                <div>
                    <img src={Location} alt="Location"  className={style.img}/>
                </div>
                <div>
                    Архангельск-на-под
                </div>
                <div>
                    <a href="#">ул. Дорожная, 1Е и еще 3</a>
                </div>
                <div className={style.block__numb}>
                    8 800 500-03-20
                </div>
                <div className={style.block__numb}>
                    8 861 200-03-20
                </div>
            </div>
            <div className={style.block__menu}>
                <div className={style.block__button}>
                    <div>
                        <button className={style.button}>Ремонт и обслуживание</button>
                    </div>
                    <div>
                        <button className={style.button}>Прокат оборудования</button>
                    </div>
                </div>
                <div className={style.menu}>
                    <div><a href="#">О нас</a></div>
                    <div><a href="#">Доставка</a></div>
                    <div><a href="#">Оплата</a></div>
                    <div><a href="#">Вакансии</a></div>
                    <div><a href="#">Помощь</a></div>
                    <div><a href="#">Контакты</a></div>
                </div>
            </div>
        </div>
    )
}

export default Head