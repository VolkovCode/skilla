import React, {useEffect} from 'react';
import style from './mainWindow.module.scss'
import {NavBar} from "../navBar";
import {Sorts} from "../sorts";
import {CallsWindow} from "../callsWindow";


export const MainWindow = () => {



  return (
      <div className={style.window}>
        <NavBar/>
        <Sorts/>
        <CallsWindow/>
      </div>
  );
};
