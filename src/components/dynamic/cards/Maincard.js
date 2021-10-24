import React from 'react';
import MaincardFront from './MaincardFront';
import MaincardBack from './MaincardBack';
import Backcards from './Backcards';
import './Maincards.css';
// import { useRandomizer } from "../storeApi";
// import { XvalueStart, XvalueEnd } from '../Dynamic'

const body = document.querySelector('body')

// const SwiperEl = document.querySelector('.swiper-wrapper')
// let SwiperElPosition = window.getComputedStyle(SwiperEl).transform
// var matrixValueArr = SwiperElPosition.split(" ")
// var StringValue = matrixValueArr[4]
// var XValue = parseInt(StringValue)
// if (XValue < -30) {
//     body.classList.add('firstSlide')
// }
// if (XValue > 1) {
//     SwiperElPosition = 'matrix(1, 0, 0, 1, 0,'
// }

class Maincard extends React.Component {
    
    // constructor() {
    //     super()
    //         this.state = {
    //             transformX: '0'
    //         }
    //     }
    
    //     _onTouchStart() {
    //     this.setState({ transformX: XvalueStart });
    //     console.log(XvalueStart)
    //     }

    //     _onTouchEnd() {
    //     this.setState({ transformX: XvalueEnd });
    //     console.log(XvalueEnd)
    //     }



    render() {
    // const {XvalueStart, XvalueEnd} = this.state
     return (
        <div className="main-card-container" 
        onClick={() => {
            if (!body.classList.contains('date')) {
                body.classList.add('date')
            }
        }}
        // onTouchStart ={this._onTouchStart.bind(this)}
        // onTouchEnd ={this._onTouchEnd.bind(this)}
        >
        <div className="main-cards-wrapper">
        <MaincardBack/>
        <MaincardFront />
        </div>
        <Backcards />
        </div>
        )
   }
}

export default Maincard;