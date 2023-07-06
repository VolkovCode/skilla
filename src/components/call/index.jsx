import React, {useEffect, useState} from 'react';
import style from './call.module.scss'
import {callStatusType} from "../ui/adds/callStatusType";
import {fetchRecord} from "../../redux/features/asyncActions";
import {AudioPlayer} from "../audioPlayer";
import {Bad} from "../estimation/bad";
import {Good} from "../estimation/good";
import {Excellent} from "../estimation/excellent";
import {EstimationScam} from "../estimation/estimationScam";


export const Call = ({status,type,time,employee,phoneNumber,from,estimation,progress,partnerId,recordId}) => {
  const [isRecord, setIsRecord] = useState('none');
  const [playerPos,setPlayerPos] =useState(false);
  const [isVisible,setIsVisible] =useState(false);


  //проверка: есть ли запись?
  useEffect(() => {
    if (recordId === '') {
      setIsRecord('none')
    } else {
      fetchRecord(recordId, partnerId)
          .then(res => {
            setIsRecord(res);
            console.log(res, '----------- ТУТ')
          })
          .catch(res => {
            console.log(res)
            setIsRecord('none')
          })
    }
  }, [partnerId,recordId]);

  //добавить плеер если есть запись
  useEffect(() => {
    if (recordId === '') {
      setPlayerPos(false)
    } else {
      setPlayerPos(true)
    }
  }, [recordId]);

  const closePlayer = () =>{
    setIsVisible(false)
    console.log('отраьвцфв')
  }


  const fmtMSS = (s) =>{
    return(s-(s%=60))/60+(9<s?':':':0')+s
  }
  const callTime = fmtMSS(progress)



  return (
      <div className={style.call}>
        <div className={style.type}>
          {callStatusType(status,type)}
        </div>
        <div className={style.time}>
          {time}
        </div>
        <div className={style.avatarBlock}>
          <img  src={employee} alt="Аватар сотрудника"/>
        </div>
        <div className={style.phoneNumber}>
          {phoneNumber}
        </div>
        <div className={style.from}>
          {from}
        </div>
        <div>
          <div className={style.estimation}>
            {playerPos?
              <EstimationScam/>:''
            }
          </div>

        </div>
        <div className={style.progress} >
          {
            playerPos && isVisible?<AudioPlayer callTime={callTime} isVisible={()=>closePlayer()}  isRecord={isRecord}/>
                :
                <div onClick={()=>setIsVisible(true)}>{progress!==0? callTime:''}</div>
          }
        </div>
      </div>
  );
};


