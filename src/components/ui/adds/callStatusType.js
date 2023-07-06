import RedArrow from "../icons/redArrow.png";
import BlueArrow from "../icons/blueArrow.png";
import GreenArrow from "../icons/greenArrow.png";
import React from "react";

export const callStatusType = (status,type) =>{
  if (status !== 'Дозвонился') {
    return <img src={RedArrow} alt="Красная стрелка"/>
  } else {
    if (type === 1) {
      return <img src={BlueArrow} alt="Голубая стрелка"/>
    } else {
      return <img src={GreenArrow} alt="Зеленая стрелка"/>
    }
  }
}