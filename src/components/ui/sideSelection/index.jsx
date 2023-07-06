import React from 'react';
import style from './sideSelection.module.scss'


export const SideSelection = ({icon,text}) => {
  return (
      <div className={style.sideSection}>
        <img className={style.resultSVG} src={icon} alt="React Logo" />
        <div className={style.text}>{text}</div>
      </div>
  );
};


