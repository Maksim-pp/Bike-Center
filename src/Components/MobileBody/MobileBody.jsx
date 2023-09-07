import React from 'react'
import style from './MobileBody.module.css'
import Delivery from '../../assets/image/доставка 1.png'
import Arrow from '../../assets/image/Arrow2.png'
import Refund from '../../assets/image/коробки 1.png'
import Arrow_2 from '../../assets/image/Group 48.png'

function MobileBody() {
    return (
        <div className={style.block}>
            <h1 className={style.h1}>Помощь</h1>
            <div>
                Телефон горячей линии<br />
                <span className={style.number}>8 (800) 500-30-20</span>
            </div>

            <div className={style.block__help}>
                <h2 >Мы всегда рады<br /> помочь</h2>
                Если у вас есть нерешенный вопрос
                <button className={style.button__mobile}>Напишите нам в чат</button>
            </div>

            <div>
                <h2 className={style.h2}>Доставка</h2>
                <div className={style.block__delivery}>
                    <img src={Delivery} alt="" />
                    <p>Стоимость доставки будет<br /> зависеть от города в котором вы <br /> находитесь</p>
                    <button>Узнать подробнее</button>
                </div>
            </div>

            <div className={style.block__bonus}>
                <h2 className={style.header__bonus}>Бонусная система</h2>
                <ul className={style.ul}>
                    <li>Покупай.</li>
                    <li>Управляй заказами.</li>
                    <li>Накапливай cashback—бонусы</li>
                </ul>
            </div>

            <div>
                <h2 className={style.h2}>Оплата</h2>
                <ul className={style.block__cash}>
                    <li>
                        <p>Как оплатить заказ</p>
                        <div>
                            <img src={Arrow} alt="" />
                        </div>
                    </li>
                    <li>
                        <p>Наложенный платеж</p>
                        <div>
                            <img src={Arrow} alt="" />
                        </div>
                    </li>
                    <li>
                        <p>Оплата электронными деньгами</p>
                        <div>
                            <img src={Arrow} alt="" />
                        </div>
                    </li>
                    <li>
                        <p>Как оплатить если нет карты</p>
                        <div>
                            <img src={Arrow} alt="" />
                        </div>
                    </li>
                    <li>
                        <p>Подарочные карты</p>
                        <div>
                            <img src={Arrow} alt="" />
                        </div>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className={style.h2}>Как сделать заказ</h2>
                <p>Мы делаем все возможное, чтобы максимально облегчить вам оформление заказа. Для того, чтобы сделать это:</p>
                <ul className={style.ul}>
                    <li>Перейдите в раздел <a href="">«Каталог»</a>;</li>
                    <li>под понравившимся вам товаром нажать на зеленую кнопку «Купить»: это отправляет ваш заказ в виртуальную корзину;</li>
                    <li>переходите в корзину и оформляете заказ;</li>
                    <li>система автоматически зарегистрирует вас;</li>
                    <li>ожидайте смс и email уведомления о статусе вашего заказа. При возникновении вопросов будем рады помочь по телефону 8(800)500-03-20.</li>
                </ul>
            </div>

            <div>
                <h2 className={style.h2}>Легкий возврат</h2>
                <div className={style.block__refund}>
                    <img src={Refund} alt="" />
                    <h3>Мы в «Байк Центре» понимаем это, и с радостью сделаем вам обмен на понравившийся вам товар или вернём деньги.</h3>
                    <ul>
                        <li>Свяжитесь с нами по телефону или онлайн-чаты. Мы оформим вам бланк возврата и вышлем его вам на электронную почту; </li>
                        <li>распечатайте и заполните бланк, его нужно будет сдать вместе с заказом на указанном нами пункте выдачи ;</li>
                        <li>надёжно упакуйте товар в коробку, предотвращая трение изделий между собой и свободное перемещение товара внутри упаковки;</li>
                        <li>сдайте заказ в том же месте, где получали его или другом удобном вам партнёрском пункте выдачи заказов или магазине;</li>
                    </ul>
                </div>
            </div>

            <div >
                <h2 className={style.h2}>Гарантия</h2>
                <p>Информацию по всем вопросам,<br /> связанным с обменом, возвратом,<br /> ремонтом и взаимодействием с <br />сервисным центром, вы можете уточнить непосредственно
                у сотрудников магазина или по телефону горячей линии.</p>
                <button className={style.button__warranty}>
                    Гарантийные талоны 
                    <div>
                        <img src={Arrow_2} alt="" />
                    </div>
                </button>
            </div>

            <div>
                <h2 className={style.h2}>Обратная связь</h2>
                <p>Если у вас есть предложения или <br /> замечания по работе интернет-магазина «Байк Центр», то вы всегда можете обратиться к нам:</p>
                <ul className={style.ul}>
                    <li>в социальной сети <a href="">ВКонтакте</a>;</li>
                    <li>по электронной почте руководителю интернет-магазина <a href="">info@bike-centre.ru</a>;</li>
                    <li>написав отзыв о работе «Байк Центра».</li>
                </ul>
            </div>
        </div>
    )
}

export default MobileBody