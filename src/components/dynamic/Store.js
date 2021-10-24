import React, { useContext, useReducer } from 'react';
import {CardsArray} from './CardsArray';
// import {1} from '../Randomizer';
import { finalNumber } from '../dynamic/Randomizer';
import { today } from '../dynamic/date';


// Get current date //


export const StoreContext = React.createContext();
const initialState = {
    date: today,
    mainTitle: '',
    runicTitle: '',
    nameNumberTitle: '',
    meaning: '',
    elementImage: '',
    zodiacImage: '',
    otherNames: '',
    numerology: '',
    meaningTitle: '',
    aboutFirst: '',
    aboutSecond: '',
    aboutThird: '',
    theme: '',
    elementImageCard: '',
    zodiacImageCard: '',
    runeImageCard: '',
    runeBorder: '',
    runeLight: '',
    letter: '',
    number: '',
    elementName: '',
    zodiacName: '',
}

const reducer = (state, action) => {
    switch(action.type) {
        case "randomize": {
            return {
                date: today,
                mainTitle: state.titles = CardsArray[finalNumber - 1].titles,
                runicTitle: state.runicTitle = CardsArray[finalNumber - 1].titles,
                nameNumberTitle: state.nameNumberTitle = CardsArray[finalNumber - 1].nameNumber,
                meaning: state.meaning = CardsArray[finalNumber - 1].meaning,
                elementImage: state.elementImage = CardsArray[finalNumber - 1].elementImage,
                zodiacImage: state.zodiacImage = CardsArray[finalNumber - 1].zodiacImage,
                otherNames: state.otherNames = CardsArray[finalNumber - 1].otherNames,
                numerology: state.numerology = CardsArray[finalNumber - 1].numerology,
                meaningTitle: state.meaningTitle = CardsArray[finalNumber - 1].meaningTitle,
                aboutFirst: state.aboutFirst = CardsArray[finalNumber - 1].aboutFirst,
                aboutSecond: state.aboutSecond = CardsArray[finalNumber - 1].aboutSecond,
                aboutThird: state.aboutThird = CardsArray[finalNumber - 1].aboutThird,
                theme: state.theme = CardsArray[finalNumber - 1].theme,
                elementImageCard: state.elementImageCard = CardsArray[finalNumber - 1].elementImageCard,
                zodiacImageCard: state.zodiacImageCard = CardsArray[finalNumber - 1].zodiacImageCard,
                runeImageCard: state.runeImageCard = CardsArray[finalNumber - 1].runeImageCard,
                runeBorder: state.runeBorder = CardsArray[finalNumber - 1].runeBorder,
                runeLight: state.runeLight = CardsArray[finalNumber - 1].runeLight,
                letter: state.letter = CardsArray[finalNumber - 1].letter,
                number: state.number = CardsArray[finalNumber - 1].cardNumber,
                elementName: state.elementName = CardsArray[finalNumber - 1].elementName,
                zodiacName: state.zodiacName = CardsArray[finalNumber - 1].zodiacName
            }
        }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
    export const StoreProvider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
      
        return (
          <StoreContext.Provider value={{state, dispatch}}>
            {children}
          </StoreContext.Provider>
        )
      }
      
      export const useStore = () => useContext(StoreContext);