import React from 'react';
import style from './logo.module.scss'
import unionLogoSVG from '../icons/unionLogoSVG.svg'

export const Logo = () => {
  return (
      <div className={style.logoSVG}>
        <img className={style.some} src={unionLogoSVG} alt="logoSVG"/>
      </div>
  );
};


