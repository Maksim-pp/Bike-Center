import React from 'react'
import style from './SubFooter.module.css'

function SubFooter() {
    return (
        <div className={style.block}>
            <div className={style.subfooter__info}>
                <div>&copy; 2022</div>
                <div>Сеть магазинов "Байк Центр" ® — bike-сentre.ru</div>
            </div>
        </div>
    )
}

export default SubFooter