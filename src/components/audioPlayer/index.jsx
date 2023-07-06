import React, {useEffect, useRef, useState} from 'react';
import style from './audioPlayer.module.scss';
import playIcon from '../../components/ui/icons/play.png'
import pauseIcon from '../../components/ui/icons/pause.png'
import download from '../../components/ui/icons/download.png'
import cross from '../../components/ui/icons/cross.png'

export const AudioPlayer = ({isRecord,isVisible,callTime}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isAudioUrl, setIsAudioUrl] = useState('none');
  const [duration, setDuration] = useState('none');

  const refAudio = useRef(null);
  // const audioItem = useRef();
  const refProgress = useRef();




  //
  useEffect(() => {
    if (isRecord === 'none') {
      return null;
    } else {
      const binaryData = [];
      binaryData.push(isRecord);
      const url = window.URL.createObjectURL(new Blob(binaryData, {type: "audio/mpeg"}))
      setIsAudioUrl(url);
    }
  }, [isRecord])

  //обновление прогресса


  // функция старта проигрывания записи (при нажатии на плей одной записи вторая ставится на паузу)
  function play(e) {
    const target = e.target.closest('#record');
    const targetAudio = target.querySelector('#audio-element');
    const records = document.querySelectorAll('#record');
    targetAudio.play()
    setDuration( targetAudio.duration)
    refAudio.current=targetAudio.currentTime
    // console.log(refAudio)
    setIsPlay(true);
    records.forEach(record => {
      const recordAudio = record.querySelector('#audio-element');
      console.log(recordAudio.id)
      if (recordAudio.id !== targetAudio.id) {
        recordAudio.pause();
      }
    });
  };

  //тупо пауза
  function pause(e) {
    const target = e.target.closest('#record');
    const targetAudio = target.querySelector('#audio-element');
    targetAudio.pause();
    setIsPlay(false)
  }

  //функция плей пауза для кнопки плей
  function playPause(e) {
    if (isPlay) {
      pause(e)
    } else {
      play(e)
    }
  }

  //закрыть плеер
  function closePlayer(e) {
    isVisible()
    pause(e);
  }


  return (
        <div id='record' className={style.record}>

          <div className={style.time}>
            {callTime}
          </div>

          <div onClick={playPause} className={style.resume}>
            { isPlay ?
                  <img src={playIcon} alt="play"/>
               :

                  <img src={pauseIcon} alt="pause"/>

            }
          </div>
          <progress max={duration} value={refAudio.current}></progress>

          <div>
            <audio  id="audio-element" className={style.recordAudio} src={isAudioUrl} >
            </audio>
          </div>

          <img src={download} alt="download icon" className={style.download}/>
          <div onClick={closePlayer} className={style.close}>
            <img src={cross} alt="cross icon"/>
          </div>
        </div>
  );
};


