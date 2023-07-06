import React, {memo, useEffect, useState} from 'react';
import style from './sorts.module.scss'
import PlusSVG from '../ui/icons/bluePlus.svg'
import LeftSVG from '../ui/icons/leftSVG.svg'
import CalendarSVG from '../ui/icons/сalendarSVG.svg'
import RightSVG from '../ui/icons/rightSVG.svg'
import SearchSVG from '../ui/icons/searchSVG.svg'
import SortIconSVG from '../ui/icons/sortIconSVG.svg'
import {SortElement} from "../ui/sortElement";
import {sorts} from '../ui/adds/sortElements'
import {useDispatch, useSelector} from "react-redux";
import {setFilterCondition} from "../../redux/features/callsSlice";

export const Sorts =  () => {
  const [isActive, setIsActive] = useState(false);
  const [callIn, setCallIn] = useState(false);
  const {calls} = useSelector(state => state.callSlice)
  const data = calls.results;
  const dispatch = useDispatch()
  //
  const handleClickShow = event => {
    setIsActive(current => !current);
  };
  // //Входящие звонки
  // const filterIn = (data) => {
  //   return data?.filter(function (el) {
  //    return  el.in_out === 1
  //   })
  // }
  // //Исходящие звонки
  // const filterOut = (data) => {
  //   return data?.filter(function (el) {
  //     return el.in_out === 0
  //   })
  // }
  //
  const handleClickIn =()=>{
    dispatch(setFilterCondition(1))
    console.log('rkfsdkg;skfngdfjns')
  }


  return (
      <div className={style.sorts}>
        <div className={style.top}>
            <div className={style.balance}>
              Баланс: <span>272₽</span>
              <img className={style.plusSVG} src={PlusSVG} alt="plus svg"/>
            </div>
          <div className={style.datePicker}>
            <img className={style.leftSVG} src={LeftSVG} alt="calendar svg"/>
            <img  className={ style.calendarSVG} src={CalendarSVG} alt="calendar svg"/>
            3 дня
            <img className={style.rightSVG} src={RightSVG} alt="calendar svg"/>
          </div>

        </div>
        <div className={style.sortGroup}>
          <div className={style.search}>
            <img className={style.searchSVG} src={SearchSVG} alt="search svg"/>
            Поиск по запросам
          </div>
          <div className={style.types}>
            <div  onClick={handleClickShow} className={ !isActive?`${style.sortTypesModal} ${style.invisible} `: style.sortTypesModal}>

                Все типы <img className={style.arrowSVG} src={SortIconSVG} alt="arrow down"/>
              <div className={style.dropdown}>
                <ul >
                  <li>Все звонки</li>
                  <li onClick={() => handleClickIn()}>Входящие звонки</li>
                  <li>Исходящие звонки</li>

                </ul>
              </div>

            </div>
          {
            sorts.map((item, index) => (
                <SortElement key={index} text={item} imgSVG={SortIconSVG}/>
            ))
          }
          </div>

        </div>
      </div>
  );
};

