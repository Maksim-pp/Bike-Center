import React from 'react'
import style from './Banners.module.css'
import Help from '../../../assets/image/Group 1587.png'
import Cash from '../../../assets/image/Group 1077239339.png'
import Vector from '../../../assets/image/Vector.png'
import Mouthpiece from '../../../assets/image/бонусы 1.png'
import Сoin_first from '../../../assets/image/монета_01 1.png'
import Coin_second from '../../../assets/image/монета_01 2.png'
import Coin_third from '../../../assets/image/монета_01 3.png'
import Refund from '../../../assets/image/коробки 1.png'
import Delivery from '../../../assets/image/доставка 1.png'
import Arrow from '../../../assets/image/Group 48.png'

function Banners() {
    return (
        <div className={style.block}>
            <div className={style.block__help}>
                <img src={Help} alt="Help"  className={style.img__help}/>
                <div className={style.heading__help}>Мы всегда рады помочь</div>
                <div>Если у вас есть нерешенный вопрос</div>
                <button>Напишите нам в чат</button>
            </div>
            <div className={style.block__cash}>
                <img src={Cash} alt="Cash" className={style.img__cash}/>
                <div className={style.heading__cash}>Оплата</div>
                <ul>
                    <li><a href="">Как оплатить заказ</a></li>
                    <li><a href="">Наложенный платёж</a></li>
                    <li><a href="">Оплата электронными деньгами</a></li>
                    <li><a href="">Как оплатить если нет карты</a></li>
                    <li><a href="">Подарочные карты</a></li>
                </ul>
            </div>
            <div>
                <div className={style.block__bonus}>
                    <img src={Vector} alt="Vector" className={style.img__vector}/>
                    <img src={Mouthpiece} alt="Mouthpiece" className={style.img__mouthpiece}/>
                    <img src={Сoin_first} alt="Сoin_first" className={style.img__coin_first}/>
                    <img src={Coin_second} alt="Coin_second" className={style.img__coin_second}/>
                    <img src={Coin_third} alt="Coin_third" className={style.img__coin_third}/>
                    <div className={style.heading__bonus}>Бонусная система</div>
                    <ul>
                        <li>Покупай.</li>
                        <li>Управляй заказами.</li>
                        <li>Накапливай cashback—бонусы</li>
                    </ul>
                </div>
                <div className={style.block__warranty}>
                    <div>
                        <div className={style.heading__warranty}>Гарантии</div>
                        <div >Информацию по всем вопросам гарантии<br /> можно узнать тут.</div>
                    </div>
                    <button className={style.button__warranty}>Гарантийные талоны  <span><img src={Arrow} alt="Arrow" className={style.img__arrow}/></span></button>
                </div>
            </div>
            
            <div className={style.block__refund}>
                <img src={Refund} alt="Refund" className={style.img__Refund}/>
                <div className={style.heading__refund}>Легкий возврат</div>
                <div>Вернуть товары легко и удобно, если сохранён его<br /> товарный вид и потребительские свойства.</div>
                <button>Узнать подробнее</button>
            </div>
            <div className={style.block__delivery}>
                <img src={Delivery} alt="Delivery" className={style.img__delivery}/>
                <div className={style.heading__delivery}>Доставка</div>
                <div>Стоимость доставки будет зависеть от<br /> города в котором вы находитесь</div>
                <button>Расчитать доставку</button>
            </div>
        </div>
    )
}

export default Banners