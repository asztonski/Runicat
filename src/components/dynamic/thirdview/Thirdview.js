import React from 'react';
import '../thirdview/Thirdview.css';
import { useRandomizer } from "../storeApi";
import { BirthDateString } from '../Randomizer'
import MobileButtonRight from '../mobileRightButton';

// const body = document.querySelector('body')


const Third = () => {
    const {
        date,
        mainTitle,
        elementImage,
        elementName,
        zodiacImage,
        zodiacName,
        runicTitle,
        nameNumberTitle,
        otherNames,
        meaning,
        meaningTitle,
        numerology,
        letter,
        theme,
        aboutFirst,
        aboutSecond,
        aboutThird
      } = useRandomizer();
      

      return (
        <div className="Third MainBox">
            <MobileButtonRight />
                <div className="left">
                <p className="date desktop">{date}</p>
                <div className="date-box mobile">
                <p className="date">{date}</p>
                <p className="date">{BirthDateString}</p>
                </div>
                <h2>{mainTitle}</h2>
                <h4>{runicTitle}</h4>
                <p className="rune-number">{nameNumberTitle}</p>
                <p className="meaning">Tradycyjne znaczenie: {meaning}</p>
                <p className="names">Inne nazwy: {otherNames}</p>
                <div className="about-box">
                    <div className="elements">
                        <div>
                            <div className="imageBox">
                            <img className="element" alt="żywioł" src={elementImage}></img>
                            </div>
                        <p>Żywioł:</p>
                        </div>
                        <p className="element-name desktop">{elementName}</p>
                        <div className="mobile">
                        <p className="element-name">{elementName}</p>
                        </div>
                    </div>
                    <div className="astrology">
                        <div>
                            <div className="imageBox">
                            <img className="zodiac" alt="zodiak" src={zodiacImage}></img>
                            </div>
                        <p>Astrologia:</p>
                        </div>
                        <p className="zodiac-name desktop">{zodiacName}</p>
                        <div className="mobile">
                        <p className="zodiac-name">{zodiacName}</p>
                        </div>
                    </div>
                    <div className="letters">
                        <div>
                            <p>Głoska:</p>
                            <p className="letter desktop">{letter}</p>
                            <div className="character-box mobile">
                            <p className="letter">{letter}</p>
                            </div>
                        </div>
                    </div>
                    <div className="numbers">
                        <div>
                            <p>Numerologia</p>
                            <p className="number desktop">{numerology}</p>
                            <div className="character-box mobile">
                            <p className="number">{numerology}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
            <div className="mobile shadowbox"></div>
                <div className="wrapper">
                <p className="date desktop">{BirthDateString}</p>
                <h5>{meaningTitle}</h5>
                <p className="about">
                {aboutFirst}<br></br><br></br>{aboutSecond}<br></br><br></br>{aboutThird}</p>
                <button className="desktop" style={ { color: `${ theme }`, borderColor: `${ theme}`, boxShadowColor: `${ theme}`} }>Pokaż pełen opis</button>
                </div>
                <div className="mobile shadowbox"></div>
            </div>
            </div>
        )
}

export default Third;