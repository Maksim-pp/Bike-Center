import React, { useState, useEffect } from 'react'
import style from './Subtitle.module.css'
import Logo from '../../../assets/image/Group 1596.png'
import SubMenu from '../../../assets/image/Group 1599.png'
import Search from '../../../assets/image/search.png'
import Icon_box from '../../../assets/image/Group 1595.png'
import Icon_diogram from '../../../assets/image/Group 1594.png'
import Icon_heart from '../../../assets/image/heart.png'
import Icon_basket from '../../../assets/image/Group 1593.png'
import User from '../../../assets/image/Group 1648.png'
import MOCK_DATA from '../../../MOCK_DATA.json';
import Search_2 from '../../../assets/image/Group 1589.png'
import Arrow from '../../../assets/image/Arrow2.png'


const filterCars = (searchText, listOfCars) => {
    if (!searchText) {
        return listOfCars;
    }
    return listOfCars.filter(({ car_model }) =>
        car_model.toLowerCase().includes(searchText.toLowerCase())
    );
}

const data = MOCK_DATA


function Subtitle(props) {

    

    const [search, setSearch] = useState(false)
    const ShowSearch = (event) => {
        setSearch(true)
    }
    const noShowSearch = (event) => {
        setSearch(false)
    }

    const [carList, setCarList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredCars = filterCars(searchTerm, data);
            setCarList(filteredCars);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchTerm]);
    
    return (
        <div className={style.block}>
            <div className={style.first__menu}>
                <div>
                    <a href="#">
                        <img src={Logo}  alt="logo"  />
                    </a>
                </div>
                <div className={style.block__submenu}>
                    <div>
                        <button className={style.button__catalog} onClick={props.Click}><img src={SubMenu} alt="SubMenu" /></button>
                    </div>
                    <form className={style.wrapper} >
                        <input 
                            type="search" 
                            placeholder='Поиск на сайте' 
                            className={style.search} 
                            onChange={(event)=> setSearchTerm(event.target.value)} 
                            onFocus={ShowSearch} 
                            onBlur={noShowSearch}/>
                        <div className={style.block__button__search}>
                            <input type='image'   src={Search} />
                        </div>
                        <div className={style.button__search}>
                            <input type='submit'   value={'Найти'} className={style.submit__search}/>
                        </div>
                        {search 
                        ? <div className={style.search__menu}>
                            <ul>
                                {carList.map((car, index)=> {
                                    return <li key={index} >
                                        <div>
                                            <img src={Search_2} alt="" className={style.img__search2}/> 
                                            {car.car_model}
                                        </div> 
                                        <img src={Arrow} alt="" />
                                    </li>
                                })}
                            </ul>
                            <div className={style.block__button}>
                                <button>Все результаты</button>
                            </div>
                        </div>
                        : null}
                    </form>
                </div>
                <div className={style.menu}>
                    <button className={style.login}><img src={User} alt="" className={style.icon__user}/> Вход</button>
                    <a>
                        <img src={Icon_box} alt="" className={style.icon}/>
                        <p>Заказы</p>
                    </a>
                    <a>
                        <img src={Icon_diogram} alt="" className={style.icon}/>
                        <p>Cравнение</p>
                    </a>
                    <a>
                    <img src={Icon_heart} alt="" className={style.icon}/>
                        <p>Избранное</p>
                    </a>
                    <a>
                        <img src={Icon_basket} alt="" className={style.icon}/>
                        <p>Корзина</p>
                    </a>
                </div>
            </div>
            <div className={style.second__menu}>
                <div className={style.block__catalog}>
                    <div><a href="#">Горные Велосипеды</a></div>
                    <div><a href="#">Детские Велосипеды</a></div>
                    <div><a href="#">Детские Самокаты</a></div>
                    <div><a href="#">Электросамокаты</a></div>
                </div>
                <div className={style.block__hot}>
                    <div><a href="#"><span>Распродажа</span></a></div>
                    <div><a href="#">Бренды</a></div>
                </div>
            </div>
        </div>
    )
}

export default Subtitle