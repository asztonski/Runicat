import React from 'react';
import { CursorProvider } from 'react-cursor-custom';
import Header from './components/static/header/Header.js';
import Main from './components/static/main/Main.js';
import Dynamicbox from './components/dynamic/Dynamic.js';
import Footer from './components/static/footer/Footer.js';
// import moveBgLight from './Main/Dynamic/bglight'
import Intro from './components/static/intro/Intro'
import './App.css';
import './components/static/intro/intro.css';
import './components/static/header/Header.css';
import './components/static/main/Main.css';
import './components/static/footer/Footer.css';
import './components/color theme/theme.css'
import Swipe from 'react-easy-swipe';


const body = document.querySelector('body');
body.classList.add('green')
body.classList.add('start')
setTimeout(() => {
  body.classList.add('progress')
}, 500);
if (window.innerWidth < 1024) {
  body.classList.add('intro')
  setTimeout(() => {
    body.classList.remove('intro')
  }, 1500);
}

class App extends React.Component {

  onSwipeRight() {
    if (body.classList.contains('third')) {
       if (body.classList.contains('firstSlide')) {
         body.classList.remove('firstSlide')
         body.classList.add('light')
       }
       if (body.classList.contains('secondSlide')) {
         body.classList.remove('secondSlide')
         body.classList.add('firstSlide')
       }
      
  }
}

  onSwipeLeft() {
    if (body.classList.contains('third')) {
    if (!body.classList.contains('firstSlide')) {
      body.classList.add('firstSlide')
      body.classList.remove('light')
    }
    else {
      body.classList.add('secondSlide')
      body.classList.remove('firstSlide')
    }
    if (body.classList.contains('secondSlide')) {
      return false
    }
  }
}

  render() {
  return (
    <CursorProvider noRing={true}>
    <div className="global-wrapper">
      <div className="mobile-background first"></div>
      <div className="mobile-background second"></div>
    <div className="global-background">
    <div className="App">
      <Intro />
      <Header />
      <Main />
      <Swipe 
      onSwipeLeft={this.onSwipeLeft}
      onSwipeRight={this.onSwipeRight}
      >
      <Dynamicbox />
      </Swipe>
      <Footer />
    </div>
    </div>
    </div>
    </CursorProvider>
  );
}
}

export default App;
