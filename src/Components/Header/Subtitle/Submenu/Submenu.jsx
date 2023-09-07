import React, { useState } from "react";
import style from './Submenu.module.css'
import ElectricScooters from '../../../../assets/image/5bca650a1d193eea53c3f7241649fdf3 1.png'
import Scooters from '../../../../assets/image/5e34f37fce33fa185ec857edaaf746ad 1.png'
import Skateboards from '../../../../assets/image/310bfa4415b02cc94568f7e7a01ff9e2 1.png'
import RollerSkates from '../../../../assets/image/2fdac15230f840069004f1a87d938da7 1.png'
import BicycleAccessories from '../../../../assets/image/d0f8d32900174fdef232743619226ffb 1.png'
import SUPandKayaks from '../../../../assets/image/29d2a575e89f3a0d990c97b711fd92de 1.png'
import Tourism from '../../../../assets/image/6b1ffd7cf7766278d38389686358f9ea 1.png'
import Simulators from '../../../../assets/image/9085abd7e9f6ade6a6b23cfadd6f9fc5 1.png'
import SparePartsForScooters from '../../../../assets/image/27cefe1a35363ca71184ca86e7a0b992 1.png'
import Spare from '../../../../assets/image/2aecbab9fa1e972f8376c14d092bdfa0 1.png'
import PartsForElectricScooters from '../../../../assets/image/fc923e6d07dd3d608759a0df43f52fcb 1.png'
import AlpineSkiing from '../../../../assets/image/a6b67f87982ad42ab602510304f2374b 1.png'
import Snowboards from '../../../../assets/image/ba4da7fb23c23ac39ad4ad42222cdb14 1.png'
import BackpacksAndBags from '../../../../assets/image/8da957da66797d34b349c990b92c1c70 1.png'
import Other from '../../../../assets/image/a6888af094e4907cf3b9e1d00a670904 1.png'
import Arrow from '../../../../assets/image/Arrow2.png'
import ListProducts from "./ListProducts/ListProducts";


function Submenu() {
    const [list, setList] = useState(false)
    const ShowList = (event) => {
    setList(current => !current)
    }

    return (
    <div className={style.block}>
        <div className={style.submenu}>
            <ul>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={ElectricScooters} alt=""  className={style.product}/>
                        </div>
                        <a href="">Велосипеды</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={Scooters} alt="" className={style.product}/>
                        </div>
                        <a href="">Электросамокаты</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={Skateboards} alt="" className={style.product}/>
                        </div>
                        <a href="">Самокаты</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={RollerSkates} alt="" className={style.product}/>
                        </div>
                        <a href="">Скейтборды</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={BicycleAccessories} alt="" className={style.product}/>
                        </div>
                        
                        <a href="">Роликовые коньки</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li  className={style.item} onClick={ShowList}>
                    <div>
                        <div className={style.block__product}>
                            <img src={SUPandKayaks} alt="" className={style.product}/>
                        </div>
                        <a href="">Велоаксессуары</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={Tourism} alt="" className={style.product}/>
                        </div>
                        <a href="">SUP и каяки</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                    
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={Simulators} alt="" className={style.product}/>
                        </div>
                        <a href="">Туризм</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={SparePartsForScooters} alt="" className={style.product}/>
                        </div>
                        <a href="">Тренажеры</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={Spare} alt="" className={style.product}/>
                        </div>
                        <a href="">Запчасти для самоктов</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={PartsForElectricScooters} alt="" className={style.product}/>
                        </div>
                        <a href="">Запчасти <br />
                        для электросамоктов</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div> 
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={AlpineSkiing} alt="" className={style.product}/>
                        </div>
                        
                        <a href="">Горные лыжи</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={Snowboards} alt="" className={style.product}/>
                        </div>
                        <a href="">Сноуборды</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={BackpacksAndBags} alt="" className={style.product}/>
                        </div>
                        <a href="">Рюкзаки и сумки</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src={Other} alt="" className={style.product}/>
                        </div>
                        <a href="">Другое</a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src="" alt="" className={style.product}/>
                        </div>
                    <a href=""><span>Ремонт и обсуживание</span></a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
                <li className={style.item}>
                    <div>
                        <div className={style.block__product}>
                            <img src="" alt="" className={style.product}/>
                        </div>
                        <a href=""><span>Прокат оборудования</span></a>
                    </div>
                    <div className={style.arrow}><img src={Arrow} alt="" /></div>
                </li>
            </ul>
        </div>
        {list 
        ?  <ListProducts />
        : null}
    </div>
    );
}

export default Submenu;
