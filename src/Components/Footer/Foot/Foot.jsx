import React from 'react'
import style from './Foot.module.css'
import WhatsApp from '../../../assets/image/whatsapp 1.png'
import Telegram from '../../../assets/image/telegram 1.png'
import QR from '../../../assets/image/qr_bike-center 1.png'
import Apple from '../../../assets/image/Group 648.png'
import Google from '../../../assets/image/Group 576.png'
import VK from '../../../assets/image/vk 1.png'
import YouTube from '../../../assets/image/youtube 1.png'
import TikTok from '../../../assets/image/youtube 2.png'

function Foot() {
    return (
        <div className={style.block}>
            <div>
                <div className={style.header}>Помощь</div>
                <ul className={style.ul__footer}>
                    <li><a href="#" className={style.a__footer}>Как оплатить?</a></li>
                    <li><a href="#" className={style.a__footer}>Как получить?</a></li>
                    <li><a href="#" className={style.a__footer}>Пользовательское соглашение</a></li>
                    <li><a href="#" className={style.a__footer}>Бонусная программа</a></li>
                </ul>
            </div>
            <div>
                <div className={style.header}>О нас</div>
                <ul className={style.ul__footer}>
                    <li><a href="#" className={style.a__footer}>Ремонт и облуживание</a></li>
                    <li><a href="#" className={style.a__footer}>Наша история</a></li>
                    <li><a href="#" className={style.a__footer}>Мероприятия от Байк Центра</a></li>
                    <li><a href="#" className={style.a__footer}>Арендодателям</a></li>
                    <li><a href="#" className={style.a__footer}>Вакансии</a></li>
                    <li><a href="#" className={style.a__footer}>Контакты</a></li>
                </ul>
            </div>
            <div>
                <div className={style.header}>Контакты</div>
                <ul className={style.ul__footer}>
                    <li><a href="#" className={style.a__footer}>8 (800) 500-03-20</a></li>
                    <li><a href="#" className={style.a__footer}>8 (861) 202-58-40</a></li>
                    </ul>
                    <div className={style.network}>
                        <div>
                            <img src={WhatsApp} alt="WhatsApp" className={style.img__WhatsApp}/><a href="#" className={style.a__footer}>WhatsApp</a>
                        </div>
                        <div>
                            <img src={Telegram} alt="Telegram" className={style.img__Telegram}/><a href="#" className={style.a__footer}>Telegram</a>
                        </div>
                    </div>
                    
                <div className={style.address}>
                    <div className={style.head}>Адреса в г. Крансодаре:</div>
                    <ul className={style.ul__footer}>
                        <li><a href="#" className={style.a__footer}>ул. Дорожная, 1Е (Яблоновский)</a></li>
                        <li><a href="#" className={style.a__footer}>ул. Сормовская, 2а</a></li>
                        <li><a href="#" className={style.a__footer}>ул. Красных Партизан, 237</a></li>
                        <li><a href="#" className={style.a__footer}>ул. Российская, 131/5</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.market}>
                <div className={style.head}>Скачайте наше приложение</div>
                <div>
                    <div className={style.store}>
                        <img src={QR} alt="QR" />
                        <div className={style.block__store}>
                            <a href=""><img src={Apple} alt="Apple" className={style.apple}/></a>
                            <a href=""><img src={Google} alt="Google" className={style.google}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.form}>
                <div className={style.head}>Узнавай о скидках первым</div>
                <div>
                    <input type="email" className={style.input__footer} placeholder='Введите свой e-mail'></input>
                    <button className={style.button__footer}>Подписаться</button>
                </div>
            </div>
            
            <div className={style.block__network}>
                <img src={VK} alt="VK" className={style.img__VK}/>
                <img src={YouTube} alt="YouTube" className={style.img__YouTube} />
                <img src={TikTok} alt="TikTok"  className={style.img__TikTok}/>
            </div>
        </div>
    )
}

export default Foot