import React from 'react';
import HoverLightUnder from './default/hoverlightunder.svg';
import Backcard from './Backcard';
import './BackCards.css';



const Backcards = () => {
    return (
        <div className="main-cards">
          <img className="hoverlightunder" alt="" src={HoverLightUnder}></img>
          <Backcard />
          <Backcard />
          <Backcard />
          <Backcard />
        </div>
        )
}

export default Backcards;