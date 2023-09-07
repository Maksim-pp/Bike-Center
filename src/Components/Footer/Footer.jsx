import React from 'react'
import style from './Footer.module.css'
import Foot from './Foot/Foot'
import SubFooter from './SubFooter/SubFooter'

function Footer() {
    return (
        <div className={style.block}>
            <Foot />
            <SubFooter />
        </div>
    )
}

export default Footer