import React from 'react';
import '../secondview/SecondView.css';
import Leftrune from '../Leftrune.svg';
import Swipe from 'react-easy-swipe';
import { useTranslation } from "react-i18next";

const body = document.querySelector('body')


const SecondView = () =>  {

    const { t } = useTranslation();

    //   onSwipeMove() {
    //     if (body.classList.contains('pullUp'))
    //     body.classList.remove('pullUp')
    //     if (window.innerWidth < 1024) {
    //         // setTimeout(() => {
    //         //     mobilePopUp.style.display = 'none'
    //         // }, 500);
    //     }
    //   }

    
        // const { t } = useTranslation();

    return (
        <Swipe className="swipeBox"
        onSwipeMove={() => {
            const mobilePopUp = document.querySelector('.Second')
            if (body.classList.contains('pullUp'))
            body.classList.remove('pullUp')
            if (window.innerWidth < 1024) {
                setTimeout(() => {
                    mobilePopUp.style.display = 'none'
                }, 800);
            }
        }}>
        <div className="Second MainBox">
            <div className='left'>
                <img alt="Lewa Runa" src={Leftrune}></img>
                <h2>{t('second_view_header')}</h2>
                <p className="desktop">{t('second_view_about_desktop')}</p>
                <p className="mobile">Wylosowana runa pozwala skupić się na tym co istotne w danym momencie.<br />Runa dnia to swego rodzaju wyrocznia losu. To wskazówka, która ułatwia poukładać bieżące sprawy. Wykorzystaj potęgę run.</p>
            </div>
            <div className='right'>
                <div className="side-cards">
                    <div>
                        <div>F</div>
                    </div>
                    <div>
                        <div>U</div>
                    </div>
                    <div>
                        <div>T</div>
                    </div>
                    <div>
                        <div>a</div>
                    </div>
                    <div>
                        <div>R</div>
                    </div>
                    <div>
                        <div>K</div>
                    </div>
                    <div>
                        <div>G</div>
                    </div>
                    <div>
                        <div>W</div>
                    </div>
                    <div>
                        <div>H</div>
                    </div>
                    <div>
                        <div>n</div>
                    </div>
                    <div>
                        <div>i</div>
                    </div>
                    <div>
                        <div>j</div>
                    </div>
                    <div>
                        <div>l</div>
                    </div>
                    <div>
                        <div>p</div>
                    </div>
                    <div>
                        <div>z</div>
                    </div>
                    <div>
                        <div>s</div>
                    </div>
                    <div>
                        <div>t</div>
                    </div>
                    <div>
                        <div>b</div>
                    </div>
                    <div>
                        <div>e</div>
                    </div>
                    <div>
                        <div>m</div>
                    </div>
                    <div>
                        <div>l</div>
                    </div>
                    <div>
                        <div>N</div>
                    </div>
                    <div>
                        <div>d</div>
                    </div>
                    <div>
                        <div>o</div>
                    </div>
                </div>
            </div>
        </div>
        </Swipe>
        )
    }

export default SecondView;