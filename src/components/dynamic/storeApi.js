import { useStore } from "../dynamic/Store";
import { dd, mm, yyyy } from './date';


var todayString = dd + '/' + mm + '/' + yyyy;

export const useRandomizer = () => {
  const { state, dispatch } = useStore();
  return {
    date: todayString,
    mainTitle: state.mainTitle,
    runicTitle: state.runicTitle,
    nameNumberTitle: state.nameNumberTitle,
    meaning: state.meaning,
    elementImage: state.elementImage,
    zodiacImage: state.zodiacImage,
    otherNames: state.otherNames,
    numerology: state.numerology,
    meaningTitle: state.meaningTitle,
    aboutFirst: state.aboutFirst,
    aboutSecond: state.aboutSecond,
    aboutThird: state.aboutThird,
    theme: state.theme,
    elementImageCard: state.elementImageCard,
    zodiacImageCard: state.zodiacImageCard,
    runeImageCard: state.runeImageCard,
    runeBorder: state.runeBorder,
    runeLight: state.runeLight,
    letter: state.letter,
    number: state.number,
    elementName: state.elementName,
    zodiacName: state.zodiacName,
    randomize: () => dispatch({type: "randomize"}),
  }
}