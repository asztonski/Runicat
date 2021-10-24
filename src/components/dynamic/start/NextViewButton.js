import React from 'react';
// const body = document.querySelector('body');

const NextView = () => {
    console.log('działam')
}

const NextViewButton = () => {
        return (
            <div>
                <button onClick={NextView()}>sprawdź swoją runę dnia</button>
            </div>
        )
}


export default NextViewButton