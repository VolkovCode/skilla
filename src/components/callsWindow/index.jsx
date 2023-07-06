import React, {memo, useEffect, useState} from 'react';
import style from './callsWindow.module.scss'
import {categories} from "../ui/adds/callsCategories";
import {Call} from "../call";
import {useDispatch, useSelector} from "react-redux";
import {callsIn} from "../ui/adds/typesSort";


export const CallsWindow = () => {
  const [allCalls, setAllCalls] = useState(true);
  const [callOut, setCallOut] = useState(false);

  const dispatch = useDispatch()
  let data
  const calls = useSelector(state => state.callSlice.calls)
  const filterCondition = useSelector(state => state.callSlice.filterCondition)

  if (filterCondition) {
    data = calls?.filter((call) => call.in_out === filterCondition)
    console.log(data, 'jnabkmnhjdfyyfz lfnf')
  } else {
    data = calls
  }
  // useEffect(() => {
  //
  // })

  // console.log(dataIn,'Датаин в винодв' )/

  // const [callIn, setCallIn] = useState(data);
  // console.log(data,'Все данные')

  // useEffect(() => {
  //   setCallIn(dataIn)
  //   console.log(dataIn,callIn, 'обновился калИН')
  // },[dataIn,callIn]);

  //ОТрисовать из Слайса

  //Звонки Сегодня
  // const filterToday = (data) => {
  //   return data?.filter(function (el) {
  //     return el.date_notime == new Date().toISOString().slice(0,10);
  //   })
  // }
  // const filterTomorrow = (data) => {
  //   return data?.filter(function (el) {
  //     return +el.date_notime !== new Date().toISOString().slice(0,10)
  //   })
  // }

  //Звонки Завтра
  // useEffect(() => {
  //   // const date = new Date().toISOString().slice(0,10);
  //   const callsIn = filterIn(data)
  //   filterOut(data)
  //
  // },[]);

  return (
      <div className={style.callsWindow}>
        <div className={style.container}>
          <div className={style.categories}>
            {
              categories.map((item, index) => (
                  <div key={index} className={style.category}>{item}</div>
              ))
            }
          </div>
          <div>
            {
              data?.map(call => (
                  <Call key={call.id}
                        status={call.status}
                        employee={call.person_avatar}
                        type={call.in_out}
                        time={call.date.slice(10, 16)}
                        phoneNumber={call.from_number}
                        from={call.partner_data.name}
                        progress={call.time}
                        partnerId={call.partnership_id}
                        recordId={call.record}/>))

               // filtred?.map(call => (
               //    <Call key={call.id}
               //          status={call.status}
               //          employee={call.person_avatar}
               //          type={call.in_out}
               //          time={call.date.slice(10, 16)}
               //          phoneNumber={call.from_number}
               //          from={call.partner_data.name}
               //          progress={call.time}
               //          partnerId={call.partnership_id}
               //          recordId={call.record}/>))
            }
          </div>
          <div>
            разделительное слово
          </div>
          <div>
            {/*{*/}
            {/*  tomorrow?.map(call => (*/}
            {/*      <Call key={call.id}*/}
            {/*            status={call.status}*/}
            {/*            employee={call.person_avatar}*/}
            {/*            type={call.in_out}*/}
            {/*            time={call.date.slice(10, 16)}*/}
            {/*            phoneNumber={call.from_number}*/}
            {/*            from={call.partner_data.name}*/}
            {/*            progress={call.time}*/}
            {/*            partnerId={call.partnership_id}*/}
            {/*            recordId={call.record}/>*/}

            {/*  ))*/}
            {/*}*/}
          </div>
        </div>
      </div>
  );
};


