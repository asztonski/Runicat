import React from 'react';
import Moon from './after/moon.svg';
import './MainCardBack.css';
import { useRandomizer } from "../storeApi";


function MaincardBack () {
    const {
        mainTitle,
        elementImage,
        zodiacImage,
        numerology,
        theme,
        runeImageCard,
        runeBorder,
        runeLight,
        letter,
        number,
      } = useRandomizer();
    return (
        <div className="main-card back">
        <img className="border" alt="otoczka" src={runeBorder}></img>
            <div>
            <img className="element" alt="żywioł" src={elementImage}></img>
            <p style={ { color: `${ theme }` } } className="card-name">{mainTitle}</p>
            <div className='fixBox'>
            <img className="zodiac" alt="zodiak" src={zodiacImage}></img>
            </div>
            </div>
            <img className="moon" alt="księżyc" src={Moon}></img>
            <img className="symbol" alt="Litera Runy" src={runeImageCard}></img>
            <img className="light" alt="światło" src={runeLight}></img>
            <p style={ { color: `${ theme }` } } className="card-name">{mainTitle}</p>
            <div>
                <p style={ { color: `${ theme }` } }>{letter}</p>
                <p style={ { color: `${ theme }` } } className="card-number">{number}</p>
                <div className="fixBox">
                <p style={ { color: `${ theme }` } }>{numerology}</p>
                </div>
            </div>
        </div>
        )
  }

export default MaincardBack;