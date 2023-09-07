import React from "react";
import style from "./MobileFoot.module.css";
import Apple from '../../../assets/image/Group 648.png'
import Google from '../../../assets/image/Group 576.png'
import WhatsApp from '../../../assets/image/whatsapp 1.png'
import Telegram from '../../../assets/image/telegram 1.png'
import Arrow from '../../../assets/image/Vector3.png'
import Rub from '../../../assets/image/Rub.png'
import Arrow__Delivery from '../../../assets/image/GroupArrow.svg'
import Contact from '../../../assets/image/Group 1328.png'
import Star from '../../../assets/image/star.png'
import Email from '../../../assets/image/Email.png'
import Button from '../../../assets/image/Group 12.png'


function MobileFoot() {
  return (
    <div className={style.block}>
      <div className={style.block__market}>
        <h3>Скачайте наше приложение</h3>
        <div className={style.block__markets}>
          <a className={style.a}>
            <img src={Apple} alt="" />
          </a>
          <a className={style.a}>
            <img src={Google} alt="" />
          </a>
        </div>
      </div>

      <div className={style.block__info}>
        <a href="#" className={style.a}>
          г. Краснодар, ул. Дорожная, 1Е <br />
          (Яблоновский) и еще 3
        </a>
        <p>С 9:00 до 20:00 без выходных </p>
      </div>

      <ul className={style.block__messenger}>
        <li className={style.WhatsApp}>
          <a className={style.a}>
            <img src={WhatsApp} alt=""  className={style.img}/>
            Написать в WhatsApp
          </a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
        <li>
          <a className={style.a}>
            <img src={Telegram} alt="" className={style.img}/>
            Написать в Telegram
          </a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
      </ul>

      <button className={style.button__number}>
        Позвонить 8 (800) 500-03-20
      </button>

      <div>
        <h2>Помощь</h2>
        <ul className={style.block__help}>
          <li>
            <a className={style.a}>
              <img src={Rub} alt=""  className={style.img}/> 
              Оплата
            </a>
            <div>
              <img src={Arrow} alt="" />
            </div>
          </li>
          <li>
            <a className={style.a}>
              <img src={Arrow__Delivery}  alt="" className={style.img}/>
              Услувия доставки
            </a>
            <div>
              <img src={Arrow} alt="" />
            </div>
          </li>
          <li>
            <a className={style.a}>
              <img src={Contact} alt="" className={style.img}/>
              Контакты
            </a>
            <div>
              <img src={Arrow} alt="" />
            </div>
          </li>
          <li>
            <a className={style.a}>
              <img src={Star} alt="" className={style.img}/>
              Оставить отзыв
            </a>
            <div>
              <img src={Arrow} alt="" />
            </div>
          </li>
        </ul>
      </div>

      <ul className={style.menu}>
        <li>
          <a className={style.a}>Ремонт и обслуживание</a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
        <li>
          <a className={style.a}>Прокат оборудования</a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
        <li>
          <a className={style.a}>О нас</a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
        <li>
          <a className={style.a}>Вакансии</a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
        <li>
          <a className={style.a}>Пользовательское соглашение</a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
        <li>
          <a className={style.a}>Бонусная программа</a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
        <li>
          <a className={style.a}>Арендодателям</a>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </li>
      </ul>

      <form action="#" className={style.form}>
        <div className={style.block__label}>
          <label htmlFor="#" className={style.label}>Подпишитесьна наши новости</label>
          <div>
            <img src={Email} alt="" />
          </div>
          </div>
        <div className={style.mail}>
          <input type="text" placeholder="Введите свой e-mail" className={style.input}/>
          <button className={style.mail__button}><img src={Button} alt="" /></button>
        </div>
      </form>
    </div>
  );
}

export default MobileFoot;
