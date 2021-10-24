import React from 'react';
import HoverLight from './default/hoverlight.svg';
import Pointer from './default/pointer.svg';
import './MainCardFront.css';
import { useTranslation } from "react-i18next";

const body = document.querySelector('body')

const MaincardFront = () => {
  const { t } = useTranslation();
    return (
        <div onClick={() => {
          if (!body.classList.contains('third')) {
          if (body.classList.contains('pullUp')) {
            if (window.innerWidth < 1024) {
              const mobilePopUp = document.querySelector('.Second')
              body.classList.remove('pullUp')
              setTimeout(() => {
                mobilePopUp.style.display = 'none'
            }, 800);
              setTimeout(() => {
                body.classList.add('date')
              }, 5800);
            }

          } else {
            body.classList.add('date')
          }
        }
        }} className="main-card front">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="216" height="65" viewBox="0 0 216 65">
            <svg xmlns="http://www.w3.org/2000/svg" width="216" height="65" viewBox="0 0 216 65">
              <g id="losuj_top" data-name="losuj top" transform="translate(-1006 -284)">
                <g id="Prostokąt_4_kopia_8" data-name="Prostokąt 4 kopia 8" transform="translate(1015 284)" stroke="#3bffe1" stroke-linecap="round" stroke-linejoin="round"            stroke-width="1">
                  <rect width="199" height="65" stroke="none"/>
                  <rect x="0.5" y="0.5" width="198" height="64" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_8-2" data-name="Prostokąt 4 kopia 8" transform="translate(1006 291)" fill="rgba(0,0,0,0)" stroke="#3bffe1" stroke-linecap="round"             stroke-linejoin="round" stroke-width="1">
                  <rect width="216" height="50" stroke="none"/>
                  <rect x="0.5" y="0.5" width="215" height="49" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_17" data-name="Prostokąt 4 kopia 17" transform="translate(1015 291)" stroke="#3bffe1" stroke-linecap="round" stroke-linejoin="round"             stroke-width="1">
                  <rect width="199" height="50" stroke="none"/>
                  <rect x="0.5" y="0.5" width="198" height="49" fill="none"/>
                </g>
                <text id="LOSUJ_RUNĘ" data-name="LOSUJ RUNĘ" transform="translate(1115.908 321.287)" fill="#3bffe1" font-size="16" font-family="Lato-Bold, Lato" font-weight="700"     letter-spacing="0.22em"><tspan x="-63.576" y="0">{t('card_front_btn')}</tspan></text>
              </g>
            </svg>
            </svg>
            </button>
            <svg className="border" xmlns="http://www.w3.org/2000/svg" width="256.103" height="500.06" viewBox="0 0 256.103 500.06">
              <g id="karta_bg" data-name="karta bg" transform="translate(0.073 0.5)">
                <g id="Prostokąt_4_kopia_2" data-name="Prostokąt 4 kopia 2" transform="translate(9.927 8.53)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="239" height="483" stroke="none"/>
                  <rect x="0.5" y="0.5" width="238" height="482" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_16" data-name="Prostokąt 4 kopia 16" transform="translate(-0.073 8.53)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="256" height="483" stroke="none"/>
                  <rect x="0.5" y="0.5" width="255" height="482" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_9" data-name="Prostokąt 4 kopia 9" transform="translate(9.927 70.53)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="239" height="358" stroke="none"/>
                  <rect x="0.5" y="0.5" width="238" height="357" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_10" data-name="Prostokąt 4 kopia 10" transform="translate(30.927 0.53)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="196" height="9" stroke="none"/>
                  <rect x="0.5" y="0.5" width="195" height="8" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_11" data-name="Prostokąt 4 kopia 11" transform="translate(30.927 490.53)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="196" height="9" stroke="none"/>
                  <rect x="0.5" y="0.5" width="195" height="8" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_12" data-name="Prostokąt 4 kopia 12" transform="translate(9.927 132.53)" fill="none"stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="239" height="236" stroke="none"/>
                  <rect x="0.5" y="0.5" width="238" height="235" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_14" data-name="Prostokąt 4 kopia 14" transform="translate(9.927 152.53)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="239" height="196" stroke="none"/>
                  <rect x="0.5" y="0.5" width="238" height="195" fill="none"/>
                </g>
                <path id="Prostokąt_11_kopia_3" data-name="Prostokąt 11 kopia 3" d="M1219,399l7-7V567l-7-7Z" transform="translate(-985 -229.47)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Prostokąt_11_kopia_4" data-name="Prostokąt 11 kopia 4" d="M1002,393l7,7V560l-7,7Z" transform="translate(-985 -229.47)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Prostokąt_11_kopia_5" data-name="Prostokąt 11 kopia 5" d="M995,392h7v82l-7,7Z" transform="translate(-985 -229.47)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Prostokąt_11_kopia_6" data-name="Prostokąt 11 kopia 6" d="M995,479l7,7v81h-7Z" transform="translate(-985 -229.47)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Prostokąt_11_kopia_7" data-name="Prostokąt 11 kopia 7" d="M1233,392h-7v82l7,7Z" transform="translate(-985 -229.47)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Prostokąt_11_kopia_7-2" data-name="Prostokąt 11 kopia 7" d="M1233,479l-7,7v81h7Z" transform="translate(-985 -229.47)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <circle id="Elipsa_1" data-name="Elipsa 1" cx="9.03" cy="9.03" r="9.03" transform="translate(0.47)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                <circle id="Elipsa_1_kopia" data-name="Elipsa 1 kopia" cx="9.03" cy="9.03" r="9.03" transform="translate(237.47)" stroke-width="1"stroke-linecap="round" stroke-linejoin="round"/>
                <circle id="Elipsa_1_kopia_2" data-name="Elipsa 1 kopia 2" cx="9.03" cy="9.03" r="9.03" transform="translate(0.47 481)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                <circle id="Elipsa_1_kopia_2-2" data-name="Elipsa 1 kopia 2" cx="9.03" cy="9.03" r="9.03" transform="translate(237.47 481)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                <ellipse id="Elipsa_5" data-name="Elipsa 5" cx="3.13" cy="3.12" rx="3.13" ry="3.12" transform="translate(6.37 5.91)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <circle id="Elipsa_5_kopia" data-name="Elipsa 5 kopia" cx="3.12" cy="3.12" r="3.12" transform="translate(243.38 5.91)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                <ellipse id="Elipsa_5_kopia_2" data-name="Elipsa 5 kopia 2" cx="3.13" cy="3.12" rx="3.13" ry="3.12" transform="translate(6.37 486.91)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <circle id="Elipsa_5_kopia_2-2" data-name="Elipsa 5 kopia 2" cx="3.12" cy="3.12" r="3.12" transform="translate(243.38 486.91)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                <path className="path-runes" id="runic_wylosuj_top" data-name="runic wylosuj top" d="M81.641,12.176l-4.5,4.894-1.516-1.4,4.609-5.036L75.606,5.594l6.1-5.474L87.658,5.6l-4.621,5.022,4.622,5.042-1.533,1.4ZM78.552,5.732,81.641,9.1l3.1-3.376L81.692,2.917ZM107.482,15.8l4.487-6.714h-8.231L109.425,0l1.755,1.1-3.706,5.917h8.362l-6.624,9.936Zm53.474-5.415,4.758-4.769,1.47,1.47-3.311,3.291,4.961,4.961-1.468,1.458Zm-138.28,0,4.759-4.769,1.47,1.47-3.311,3.291,4.961,4.961-1.468,1.458Zm117.8,6.262V6.306l-4.555-2.27V16.644h-2.069V.678l8.693,4.351V16.644Zm-88.706,0V.566l6.577,3.952L57.294,6.286,53.841,4.223V16.644ZM0,16.644V.566L8.924,5.658,2.069,9.585v7.059ZM2.069,7.2,4.75,5.659,2.069,4.128Zm163.849,3.173,3.31-3.317L164.273,2.1l1.45-1.45,6.42,6.42-4.768,4.759Zm-138.279,0,3.31-3.317L25.995,2.1,27.445.65l6.42,6.42L29.1,11.829Z" transform="translate(43.156 24.173)"/>
                <path className="path-runes" id="runic_wylosuj_bottom" data-name="runic wylosuj bottom" d="M75.623,15.675l4.609-5.037L75.606,5.594,81.711.12,87.658,5.6l-4.621,5.023,4.622,5.042-1.533,1.4-4.486-4.893-4.5,4.894Zm2.929-9.943L81.641,9.1l3.1-3.377L81.692,2.916ZM107.482,15.8l4.487-6.715h-8.231L109.425,0l1.755,1.1-3.706,5.917h8.362l-6.624,9.937Zm53.474-5.416,4.758-4.768,1.47,1.469-3.311,3.291,4.961,4.961-1.468,1.458Zm-138.28,0,4.759-4.768L28.9,7.081l-3.311,3.291,4.961,4.961-1.468,1.458Zm117.8,6.262V6.305l-4.555-2.269V16.643h-2.069V.677l8.693,4.351V16.643Zm-88.706,0V.565l6.577,3.952L57.294,6.286,53.841,4.222V16.643ZM0,16.643V.565L8.924,5.657,2.069,9.585v7.058ZM2.069,7.2,4.75,5.658,2.069,4.128Zm163.849,3.172,3.31-3.317L164.273,2.1l1.45-1.45,6.42,6.42-4.768,4.759Zm-138.279,0,3.31-3.317L25.995,2.1l1.45-1.45,6.42,6.42L29.1,11.828Z" transform="translate(43.156 459.174)"/>
                <g id="Prostokąt_4_kopia_3" data-name="Prostokąt 4 kopia 3" transform="translate(40.927 162.53)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="176" height="176" stroke="none"/>
                  <rect x="0.5" y="0.5" width="175" height="175" fill="none"/>
                </g>
              </g>
              </svg>
              <svg className="moon" xmlns="http://www.w3.org/2000/svg" width="218.789" height="218.789" viewBox="0 0 218.789 218.789">
                <g id="moon" transform="translate(-1004.606 -370.606)">
                  <rect id="Prostokąt_11" data-name="Prostokąt 11" width="154" height="154" transform="translate(1037 403)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect id="Prostokąt_11_kopia_8" data-name="Prostokąt 11 kopia 8" width="134" height="134" transform="translate(1047 413)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Prostokąt_11_kopia_2" data-name="Prostokąt 11 kopia 2" d="M1114,371.105,1222.894,480,1114,588.894,1005.106,480Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Prostokąt_11_kopia_9" data-name="Prostokąt 11 kopia 9" d="M1115,384.105,1209.894,479,1115,573.894,1020.106,479Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Prostokąt_11_kopia_10" data-name="Prostokąt 11 kopia 10" d="M1115,404.105,1189.894,479,1115,553.894,1040.106,479Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Prostokąt_zaokrąglony_14_kopia" data-name="Prostokąt zaokrąglony 14 kopia" d="M1055.006,538.494a65.527,65.527,0,0,1,0-117.988,65.527,65.527,0,0,1,117.988,0,65.527,65.527,0,0,1,0,117.988,65.527,65.527,0,0,1-117.988,0Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <circle id="Elipsa_2" data-name="Elipsa 2" cx="67" cy="67" r="67" transform="translate(1048.5 412.5)" stroke-width="1"  stroke-linecap="round" stroke-linejoin="round"/>
                  <g id="Grupa_7" data-name="Grupa 7">
                    <circle className='moon-circle' id="Elipsa_2_kopia" data-name="Elipsa 2 kopia" cx="55.03" cy="55.03" r="55.03" transform="translate(1060.47 424.47)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle id="Elipsa_4" data-name="Elipsa 4" cx="49.97" cy="49.97" r="49.97" transform="translate(1071.53 429.53)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </g>
               </svg>
            <img className='pointer' alt="Kursor" src={Pointer}></img>
            <img className="hoverlight" alt="" src={HoverLight}></img>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="216" height="65" viewBox="0 0 216 65">
              <g id="losuj_top" data-name="losuj top" transform="translate(-1006 -284)">
                <g id="Prostokąt_4_kopia_8" data-name="Prostokąt 4 kopia 8" transform="translate(1015 284)" stroke="#3bffe1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="199" height="65" stroke="none"/>
                  <rect x="0.5" y="0.5" width="198" height="64" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_8-2" data-name="Prostokąt 4 kopia 8" transform="translate(1006 291)" fill="rgba(0,0,0,0)" stroke="#3bffe1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="216" height="50" stroke="none"/>
                  <rect x="0.5" y="0.5" width="215" height="49" fill="none"/>
                </g>
                <g id="Prostokąt_4_kopia_17" data-name="Prostokąt 4 kopia 17" transform="translate(1015 291)" stroke="#3bffe1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                  <rect width="199" height="50" stroke="none"/>
                  <rect x="0.5" y="0.5" width="198" height="49" fill="none"/>
                </g>
                <text id="LOSUJ_RUNĘ" data-name="LOSUJ RUNĘ" transform="translate(1115.908 321.287)" fill="#3bffe1" font-size="16" font-family="Lato-Bold, Lato" font-weight="700" letter-spacing="0.22em"><tspan x="-63.576" y="0">{t('card_front_btn')}</tspan></text>
              </g>
            </svg>
            </button>
        </div>
        )
}

export default MaincardFront;