import React from 'react'
import Head from './Head/Head'
import Subtitle from './Subtitle/Subtitle'
import style from './Header.module.css'

function Header(props) {
    return (
        <div className={style.block}>
            <Head />
            <Subtitle Click={props.Click}/>
            
        </div>
    )
}

export default Header