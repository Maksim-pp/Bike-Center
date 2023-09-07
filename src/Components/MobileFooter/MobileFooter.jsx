import React from 'react'
import MobileFoot from './MobileFoot/MobileFoot'
import style from './MobileFooter.module.css'
import MobileSubFooter from './MobileSubFooter/MobileSubFooter'

function MobileFooter() {
    return (
        <div className={style.block}>
            <MobileFoot />
            <MobileSubFooter />
        </div>
    )
}

export default MobileFooter