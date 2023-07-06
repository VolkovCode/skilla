import React from 'react';
import style from './sideBar.module.scss'
import {SideSelection} from "../ui/sideSelection";
import {Logo} from "../ui/logo";
import {sections} from "../ui/adds/sideElements";
import PlusSVG from '../ui/icons/plusSVG.svg'
import ExclamationSVG from '../ui/icons/exclamationSVG.svg'
import axios from "axios";


export const SideBar = () => {




  return (
      <div className={style.sideBar}>
        <Logo/>
        {
          sections.map((item, index) => (
              <SideSelection key={index} icon={item.icon} text={item.text}/>
          ))
        }
        <div className={style.sideButtons}>

            <div className={style.sideButton1}>
              <span>Добавить заказ</span>
              <img className={style.plusSVG} src={PlusSVG} alt="plus svg" />
            </div>

            <div className={style.sideButton2}>
              <span>Оплата</span>
              <img className={style.exclamationSVG} src={ExclamationSVG} alt="exclamation mark svg" />
            </div>

        </div>


      </div>
  );
};


