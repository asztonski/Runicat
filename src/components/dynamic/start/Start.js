import React from 'react';
import '../start/Start.css';
import Leftrune from '../Leftrune.svg';
import Rightrune from '../start/Rightrune.svg';
import { useTranslation } from "react-i18next";



const Start = ({ changeToSecondView }) => {
    const { t } = useTranslation();
    console.log(t('1_card_meaning'))
    return (
        
        <div className="Start MainBox">
            <svg className="main-rune desktop" xmlns="http://www.w3.org/2000/svg" width="1600" height="720.001" viewBox="0 0 1600 720.001">
             <path id="Prostokąt_7_kopia_3" data-name="Prostokąt 7 kopia 3" d="M1760,835H160V115H1760V835ZM825.89,292.31h0l-37.148,40.955L932.865,463.68V691.406h55.221V463.673L1131.9,333.2l-36.842-40.89L988.087,389.105V259.3H932.865V389.105L825.89,292.31Z" transform="translate(-160 -115)"/>
            </svg>
            {/* <svg className="main-rune mobile" xmlns="http://www.w3.org/2000/svg" width="349.989" height="475.62" viewBox="0 0 349.989 475.62">
             <path id="Prostokąt_7_kopia_5" data-name="Prostokąt 7 kopia 5" d="M355,525.81H5.01V50.19H355V525.81h0ZM72.4,197.313l90.721,81.794V421.932h34.759V279.1l90.528-81.83-23.191-25.645-67.337,60.708V150.924H163.119v81.411L95.782,171.627Zm92.721,222.619V278.107L75.4,197.313l20.383-22.686,69.337,62.708V152.924h30.759v84.412l69.337-61.708,19.191,21.645L195.878,278.1v141.83Z" transform="translate(-5.01 -50.19)"/>
            </svg> */}
            <svg className="main-rune mobile" xmlns="http://www.w3.org/2000/svg" width="350" height="696" viewBox="0 0 350 696">
            <path id="Prostokąt_7_kopia_5" data-name="Prostokąt 7 kopia 5" class="cls-1" d="M0.006,0.192H349.994V695.808H0.006V0.192ZM260.215,231.627l-67.337,60.708V210.924h-34.76v81.411L90.781,231.627,67.4,257.314l90.72,81.793V481.932h34.76V339.1l90.528-81.83Zm0,4-69.337,61.708V212.924h-30.76v84.411L90.781,234.627,70.4,257.314l89.72,80.793V479.932h30.76V338.1l88.528-80.83Z"/>
            </svg>
            <h3>
                <span className="desktop">
                {t('runes_for_every_day')}
                </span>
                <span className="mobile">Runa<br />Dnia</span>
                <span className="desktop">
                    {t('check_your_today_rune')}
                </span>
                <span className="mobile">Sprawdź<br />runę</span>
            </h3>
            <main>
                <div className="left">
                    <img src={Leftrune} alt="" />
                    <h2><span className="desktop">
                    {t('rune_cosmic_nature_first')}
                    </span> 
                    {t('rune_cosmic_nature_second')}
                    </h2>
                </div>
                <div className="right">
                    <p className="desktop">
                        {t('first_view_text_about_desktop')}
                        </p>
                    <p className="mobile">Poznaj wskazówki, które los<br />chce ujawnić Tobie.</p>
                    <img className="desktop" src={Rightrune} alt="Runa dnia" />
                    <button onClick = {changeToSecondView} >
                    {t('first_view_button_next')}
                    <span className="desktop">
                    {/* {t('first_view_button_next_second')} */}
                    </span>
                    {/* {t('first_view_button_next_third')} */}
                    </button>
                </div>
            </main>
        </div>
        )
}

export default Start;