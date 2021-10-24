import React, { Component } from 'react';
import '../dynamic/Dynamic.css';
import '../dynamic/slider/Slider.css';
import Slider from '../dynamic/slider/Slider';
import Start from '../dynamic/start/Start.js';
import SecondView from '../dynamic/secondview/SecondView';
import ThirdView from '../dynamic/thirdview/Thirdview';
import Maincard from '../dynamic/cards/Maincard';
import DatePopUp from './popups/DatePopUp';
import MobileButtonRight from './mobileRightButton';
import { StoreProvider } from './Store'

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
// }}

export let XvalueStart = 0;
export let XvalueEnd = 0;


class Dynamicbox extends Component {
    constructor() {
        super();
        this.state = {
            route: 'firstview'
        }    
    }

    changeToSecondView = () => {
        body.classList.add('hide')
        body.classList.remove('progress')
        body.classList.add('second')
        setTimeout(() => {
            this.setState({route: 'secondview'})
        }, 400);
        setTimeout(() => {
            body.classList.add('carddeck')
            body.classList.remove('hide')
        }, 450);
        setTimeout(() => {
            body.classList.remove('start')
        }, 1000);
        if (window.innerWidth < 1024) {
         setTimeout(() => {
            body.classList.add('pullUp')
         }, 1650);   
        }
    }

    changeToThirdView = () => {
        setTimeout(() => {
            body.classList.add('third')
            body.classList.add('movecard')
            body.classList.remove('date')
            body.classList.remove('carddeck')
            body.classList.remove('second')
           }, 500);

           setTimeout(() => {
            this.setState({route: 'thirdview'})
        }, 1000);
        
          setTimeout(() => {
            body.classList.add('light')
            body.classList.remove('green')
          }, 3500);
    }

    // changeToThirdViewDate = () => {
    //     setTimeout(() => {
    //         body.classList.add('third')
    //         body.classList.add('movecard')
    //         body.classList.remove('date')
    //         body.classList.remove('carddeck')
    //         body.classList.remove('second')
    //        }, 500);
    //     setTimeout(() => {
    //         body.classList.add('light')
    //         body.classList.remove('green')
    //     }, 3500);
    //     setTimeout(() => {
    //         this.setState({route: 'thirdview'})
    //     }, 3600);
    // }

    render() {
        var clientX;
        var deltaX;
    return (
        <div className="Dynamic-box" 
        
        onTouchStart={ (e) => {
                clientX = e.touches[0].clientX;
                // console.log(clientX)
                return XvalueStart = clientX
        }}
        onTouchEnd={ (e) => {
            deltaX = e.changedTouches[0].clientX
            // console.log(deltaX)
            return XvalueEnd = deltaX
        }}
        // onClick = {() => {
        //     console.log(XvalueStart)
        // }}
        >
           <StoreProvider>
               <Slider />
               {this.state.route === 'firstview' 
               ? <Start changeToSecondView={this.changeToSecondView} />
               : false
               }
               <Maincard  />
               {this.state.route === 'secondview'
               ?    <div>
                    <SecondView />
                    <DatePopUp changeToThirdView={this.changeToThirdView} />
                    <MobileButtonRight />
                    </div>
                : false    
               }
               {this.state.route === 'thirdview'
               ? <ThirdView />
               : false}
            </StoreProvider>
        </div>
        )
}
}

export default Dynamicbox;