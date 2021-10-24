import { CardsArray } from './CardsArray';
import { dd, mm, yyyy } from '../dynamic/date'
import { birthDate } from './popups/DatePopUp';
import {randomNumber } from './randomizeNumber';
// import BirthdayValue from '../dynamic/popups/DatePopUp'


export let finalNumber = null;
let finalNumerologyNumber = null;
export let BirthDateString = null;


////////////////////

// Today Numerology 

///////////////////

export const TodayNumber = () => {

    // Split Day Numbers //


    var DayOutput = [],

    DayNumber = dd.toString();

    for (var i = 0, DayLen = DayNumber.length; i < DayLen; i += 1) {
    DayOutput.push(+DayNumber.charAt(i));
    }

    // Split Month Numbers //


    var MonthOutput = [],

    MonthNumber = mm.toString();

    for (var i = 0, MonthLen = MonthNumber.length; i < MonthLen; i += 1) {
    MonthOutput.push(+MonthNumber.charAt(i));
    }

    // Split Year Numbers //


    var YearOutput = [],

    YearNumber = yyyy.toString();

    for (var i = 0, YearLen = YearNumber.length; i < YearLen; i += 1) {
    YearOutput.push(+YearNumber.charAt(i));
    }

    BirthDateString = dd + '/' + mm + '/' + yyyy;

    // Numerology summary //


    const NumerologyNumber = DayOutput[0] + DayOutput[1] + MonthOutput[0] + MonthOutput[1] + YearOutput[0] + YearOutput[1] + YearOutput[2] + YearOutput[3];
    console.log('Suma dzisiejszej daty to ',NumerologyNumber)
    
    var NumerologyOutput = []


    // Check if numerology summary value is higher than array length, if is higher - another numerology summary //
    
    


    let NumerologyNumberString = NumerologyNumber.toString();
    for (var i = 0, NumerologyLen = NumerologyNumberString.length; i < NumerologyLen; i += 1) {
    NumerologyOutput.push(+NumerologyNumberString.charAt(i));
    }

    let NumerologyOutPutAnswer = null;

    const masterNumber = () => {
      if (NumerologyOutput[0] !== NumerologyOutput[1]) {
        return NumerologyOutPutAnswer = NumerologyOutput[0] + NumerologyOutput[1];
      } else {
        NumerologyOutPutAnswer = NumerologyNumberString
        return console.log('liczba mistrzowska ', NumerologyOutPutAnswer)
      }
    }

    // 18.08.2021 - error 22.02.2000 //

    masterNumber()
    const correctNumberValue = NumerologyOutPutAnswer + randomNumber;


    console.log('losowa liczba to ', randomNumber);
    console.log('numerologia to ', NumerologyOutPutAnswer);
    console.log('liczba losowania + numerologia to ', correctNumberValue);


    // Check if final summary is higher than array length
    

    const correctNumber = () => {
        if (correctNumberValue > CardsArray.length) {
            finalNumerologyNumber = correctNumberValue - randomNumber
            console.log('różnica wynosi ', finalNumerologyNumber)
            return finalNumerologyNumber
        } else {
            finalNumerologyNumber = correctNumberValue
            console.log('bez różnicy wynosi ', finalNumerologyNumber)
            return finalNumerologyNumber
        }
    }
    correctNumber()

      console.log("finałowa cyfra to ",finalNumerologyNumber);
      finalNumber = finalNumerologyNumber
      return ( finalNumber, BirthDateString )
}




export let BirthDay = null;
export let BirthMonth = null;
export let BirthYear = null;




//////////////////////// 

// Birthday Numerology

//////////////////////




export const BirthdayNumber = () => {

  BirthDay = String(birthDate.getDate()).padStart(2, '0');
  BirthMonth = String(birthDate.getMonth() + 1).padStart(2, '0');
  BirthYear = birthDate.getFullYear();




  let BirthDayOutput = [],
  BirthDayNumber = BirthDay.toString();




  for (var i = 0, DayLen = BirthDayNumber.length; i < DayLen; i += 1) {
    BirthDayOutput.push(+BirthDayNumber.charAt(i));
  }




  let BirthMonthOutput = [],
  BirthMonthNumber = BirthMonth.toString();



  for (var i = 0, MonthLen = BirthMonthNumber.length; i < MonthLen; i += 1) {
    BirthMonthOutput.push(+BirthMonthNumber.charAt(i));
  }



  let BirthYearOutput = [],
  BirthYearNumber = BirthYear.toString();



  for (var i = 0, YearLen = BirthYearNumber.length; i < YearLen; i += 1) {
    BirthYearOutput.push(+BirthYearNumber.charAt(i));
  }



  BirthDateString = BirthDay + '/' + BirthMonth + '/' + BirthYear;



  const BirthNumerologyNumber = BirthDayOutput[0] + BirthDayOutput[1] + BirthMonthOutput[0] + BirthMonthOutput[1] + BirthYearOutput[0] + BirthYearOutput[1] + BirthYearOutput[2] + BirthYearOutput[3];


  let SecondBirthDateOutput = [],
  BirthNumerologyString = BirthNumerologyNumber.toString();



  for (var i = 0, SecondNumerologyLen = BirthNumerologyString.length; i < SecondNumerologyLen; i += 1) {
    SecondBirthDateOutput.push(+BirthNumerologyString.charAt(i));
  }

  var SecondBirthdateNumerologyValue = SecondBirthDateOutput[0] + SecondBirthDateOutput[1];


  let finalBirthdayNumberValue = null

  const checkBinaryNumber = () => {
    if (SecondBirthDateOutput[1] !== undefined) {
      finalBirthdayNumberValue = randomNumber + SecondBirthdateNumerologyValue
      console.log('numerologia daty to ', SecondBirthDateOutput[0], '+', SecondBirthDateOutput[1], '=', SecondBirthdateNumerologyValue, 'losowa liczba to ', randomNumber, 'wynik to ', finalBirthdayNumberValue)
      return finalBirthdayNumberValue
    } else {
      finalBirthdayNumberValue = randomNumber + SecondBirthDateOutput[0]
      console.log('numerologia daty to ', SecondBirthDateOutput[0], 'losowa liczba to ', randomNumber, 'wynik to ', finalBirthdayNumberValue)
      return finalBirthdayNumberValue
    }
  }

checkBinaryNumber()

let finalBirthdayNumber = finalBirthdayNumberValue

  let birthdayNumerologyOutput = [];
  let birthdayNumerologyNumberString = finalBirthdayNumber.toString();
 

  const finalBirthNumberCheck = () => {

    if (SecondBirthDateOutput[0] !== SecondBirthDateOutput[1]) {



    if (finalBirthdayNumber > CardsArray.length) {
      for (var i = 0, birthdayNumerologyLen = birthdayNumerologyNumberString.length; i < birthdayNumerologyLen; i += 1) {
      birthdayNumerologyOutput.push(+birthdayNumerologyNumberString.charAt(i));
      }
      console.log('output to ', birthdayNumerologyOutput)
      


      return (
        finalNumber = finalBirthdayNumber - CardsArray.length,
        console.log('liczba za duża, wynik to: ',finalBirthdayNumber,'- ',CardsArray.length,'= ', finalNumber)
        )



      } else {
      console.log('liczba nie jest za duża')
      return finalNumber = finalBirthdayNumber
    }
  }



  else {
    if (BirthNumerologyNumber >= randomNumber) {
      console.log('liczba mistrzowska ',BirthNumerologyNumber, '-', randomNumber, '=', BirthNumerologyNumber - randomNumber)
      return finalNumber = BirthNumerologyNumber - randomNumber
    } else {
      if (BirthNumerologyNumber + randomNumber <= CardsArray.length - 1) {
      console.log('liczba mistrzowska ',BirthNumerologyNumber, '+', randomNumber, '=', BirthNumerologyNumber + randomNumber)
      console.log('wynik był większy niż długość tablicy,finałowa liczba mistrzowska')
      return finalNumber = BirthNumerologyNumber + randomNumber;
      } else {
        let finalMasterNumber = BirthNumerologyNumber + randomNumber;
        let masterNumerologyOutput = [];
        let masterNumerologyNumberString = finalMasterNumber.toString();

        for (var i = 0, masterNumerologyLen = masterNumerologyNumberString.length; i < masterNumerologyLen; i += 1) {
          masterNumerologyOutput.push(+masterNumerologyNumberString.charAt(i));
        }
      
        var SecondMasterNumerologyValue = SecondBirthDateOutput[0] + SecondBirthDateOutput[1];
        console.log('wynik był większy niż długość tablicy,finałowa liczba mistrzowska')
        return finalNumber = SecondMasterNumerologyValue
    }

    }
  }
}





  finalBirthNumberCheck();

  console.log('finałowa liczba dla urodzin to ', finalNumber)
  console.log('BirthDay', BirthDay, 'BirthMonth', BirthMonth, 'BirthYear', BirthYear)
  return (
    BirthDay, BirthMonth, BirthYear, BirthDateString
  )
}