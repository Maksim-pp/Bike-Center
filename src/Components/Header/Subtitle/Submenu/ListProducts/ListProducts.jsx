import React from 'react'
import style from './ListProducts.module.css'

function ListProducts() {
    return (
        <div className={style.block}>
            <div className={style.block__list}>
                <ul>
                    <li className={style.header}>
                        <h3>Амортизаторы и вилки</h3>
                        <div></div>
                    </li>
                    <li>Амортизаторы</li>
                    <li>Вилки</li>
                    <li>Запчасти для вилок</li>
                    <li>Запчасти для амортизаторов</li>
                    <li className={style.header}>
                        <h3>Колёса и комплектующие</h3>
                        <div></div>
                    </li>
                    <li>Покрышки</li>
                    <li>Камеры</li>
                    <li>Обода</li>
                    <li>Колеса в сборе</li>
                    <li>Втулки</li>
                    <li>Запчасти для втулок</li>
                    <li>Герметики</li>
                    <li>Наппеля</li>
                    <li>Спицы</li>
                    <li>Флипперы</li>
                    <li className={style.header}>
                        <h3>Трансмиссия</h3>
                        <div></div>
                    </li>
                    <li>Манетки</li>
                    <li>Переключатели задние</li>
                    <li>Переключтели передние</li>
                </ul>
                <ul>
                    <li className={style.header}>
                        <h3>Привод</h3>
                        <div></div>
                    </li>
                    <li>Кассеты и трещотки</li>
                    <li>Звёзды и рокринги</li>
                    <li>Системы (шатуны)</li>
                    <li>Педали</li>
                    <li>Каретки</li>
                    <li>Цепи</li>
                    <li>Натяжители и успокоители</li>
                    <li className={style.header}>
                        <h3>Рамы и комплектующие</h3>
                        <div></div>
                    </li>
                    <li>Рамы</li>
                    <li>Петухи</li>
                    <li>Защита пера</li>
                    <li>Пеги</li>
                    <li className={style.header}>
                        <h3>Рулевое управление</h3>
                        <div></div>
                    </li>
                    <li>Рули</li>
                    <li>Рога</li>
                    <li>Грипсы и обмотки руля</li>
                    <li>Выносы</li>
                    <li>Рулевые колонки</li>
                    <li>Якоря и проставочные кольца</li>
                </ul>
                <ul>
                    <li className={style.header}>
                        <h3>Седля и подседельные<br /> штыри</h3>
                        <div></div>
                    </li>
                    <li>Сёдла</li>
                    <li>Штири</li>
                    <li>Подседельные зажимы</li>
                    <li className={style.header}>
                        <h3>Тормозные системы</h3>
                        <div></div>
                    </li>
                    <li>Тормоза дисковые гидравлические</li>
                    <li>Тормоза дисковые механические</li>
                    <li>Роторы</li>
                    <li>Адаптеры</li>
                    <li>Колодки</li>
                    <li>Тормоза V-Brake</li>
                    <li>Тормоза клещевые</li>
                    <li>Тормоза кантиливерные</li>
                    <li>Тормозные ручки</li>
                    <li>Запчасти для тормозных систем</li>
                    <li className={style.header}>
                        <h3>Инструменты</h3>
                        <div></div>
                    </li>
                    <li>Мультитулы</li>
                    <li>Ключи специальные</li>
                    <li>Съемники</li>
                    <li>Выжимники цепи</li>
                    <li>Ремнаборы для камер и покрышек</li>
                    <li>Наборы инструментов</li>
                    <li>Монтажки</li>
                </ul>
            </div>
            <div className={style.block__img}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ListProducts