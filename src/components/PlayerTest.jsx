
import Dice from './Dice';
import React, { useState } from 'react';

function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
}



function PlayerTest(props) {
    const [playerState, setPlayerState] = useState({
        dice: [{ side: 0, locked: false }, { side: 1, locked: false }, { side: 2, locked: false }, { side: 3, locked: false }, { side: 4, locked: false }]
    })

    const diceList = playerState.dice.map(die => (<Dice side={die.side} locked={die.locked} />))

    return (
        <div>
            {diceList}
        </div>
    )
}

export default PlayerTest;

