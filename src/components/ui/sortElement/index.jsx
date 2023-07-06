import React from 'react';
import style from './sortElement.module.scss'

export const SortElement = ({text,imgSVG}) => {
  return (
        <div className={style.sortElements}>
          {text} <img className={style.arrowSVG} src={imgSVG} alt="arrow down"/>
        </div>
  );
};


