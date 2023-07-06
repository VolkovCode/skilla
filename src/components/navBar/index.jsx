import React from 'react';
import style from './navBar.module.scss'
import SearchSVG from '../ui/icons/searchSVG.svg'
import SortIconSVG from '../ui/icons/sortIconSVG.svg'
import face from '../ui/images/face.jpg'
import PercentBar from '../ui/icons/colorBar.svg'


export const NavBar = () => {
  return (
      <div className={style.nav}>
        <div className={style.date}>Среда,13 окт</div>
        <div className={style.progressBars}>
          <div className={style.newCalls}>
            <label htmlFor="newCalls">Новые звонки<span> 20 из 30 шт</span></label>
            <progress className={style.newCallsProgress} id="newCalls" max="30" value="20"></progress>
          </div>
          <div className={style.quality}>
            <label htmlFor="quality">Качество разговоров<span> 40%</span></label>
            <progress className={style.qualityProgress} id="quality" max="100" value="40"></progress>
          </div>
          <div className={style.conversion}>
            <label htmlFor="conversion">Конверсия в заказ<span> 67%</span></label>
            <progress className={style.conversionProgress} id="conversion" max="100" value="67"></progress>
          </div>
        </div>

        <div className={style.navGroup}>
          <img className={style.SearchSVG} src={SearchSVG} alt="search svg"/>
          <div className={style.IP}>
            ИП Сидорова Александра Михайловна
            <img className={style.sortIconSVG1} src={SortIconSVG} alt="sort icon"/>
          </div>
          <div className={style.face}>
            <img src={face} alt="face"/>
            <img className={style.sortIconSVG2} src={SortIconSVG} alt="sort icon"/>
          </div>
        </div>

      </div>
  );
};
