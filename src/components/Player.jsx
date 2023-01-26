import React, { useState } from 'react';
import diceOne from '../images/dice1.png';
import diceTwo from '../images/dice2.png';
import diceThree from '../images/dice3.png';
import diceFour from '../images/dice4.png';
import diceFive from '../images/dice5.png';
import diceSix from '../images/dice6.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Dice from './Dice';

function Player() {

    const [playerState, setPlayerState] = useState({
        dice: [{ side: 0, locked: false }, { side: 1, locked: false }]
    })


    const diceList = playerState.dice.map(die => (<Dice side={die.side} locked={die.locked} />))
    return (

        <div>
            {diceList}
        </div>
    )

}
export default Player;