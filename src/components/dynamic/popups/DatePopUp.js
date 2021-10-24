import React, {useState} from 'react';
import '../popups/DatePopUp.css';
import {CardsArray} from '../CardsArray';
import { finalNumber } from '../Randomizer';
import { useRandomizer } from "../storeApi";
import {TodayNumber, BirthdayNumber} from '../Randomizer';
import DatePicker from 'react-date-picker';
import { useTranslation } from "react-i18next";

const body = document.querySelector('body')
export let birthDate = null;



const DatePopUp = ({ changeToThirdView }) => {

  const { t } = useTranslation();
  
  const { randomize } = useRandomizer();
  const [value, onChange] = useState(new Date());

birthDate = value;



      return (
        <div className="dateform">
        <p>{t('popup_first')}</p>
        <p className="desktop">{t('popup_second_desktop')}</p>
        <p className="mobile">{t('popup_second_mobile')}</p>
        <div className="datePickerWrapper">
        <DatePicker
                   onChange={onChange}
                   value={value}
                   format={"yyyy/MM/dd"}
          />
          <div className="check">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14">
               <path id="Kształt_3" data-name="Kształt 3" class="cls-1" d="M1,8l5,5L16,1"/>
             </svg>
          </div>
          </div>
          <div className='buttonbox'>
          <button onClick={ () => {
                  TodayNumber();
                  randomize();
                  console.log(finalNumber)
                  changeToThirdView();
                      setTimeout(() => {
                        body.classList.add(CardsArray[finalNumber - 1].titles)
                      }, 2600);
          }}>{t('popup_button_first')}</button>
          <button onClick={ () => {                  
            BirthdayNumber()
                  randomize();
                  if (birthDate !== null)
                      changeToThirdView();
                      setTimeout(() => {
                        body.classList.add(CardsArray[finalNumber - 1].titles)
                      }, 2600);
                      return birthDate
          }}>{t('popup_button_second')}</button>
          </div>
          </div> 
        )
    }

export default DatePopUp;