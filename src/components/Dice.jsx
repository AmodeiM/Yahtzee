import React from 'react';
import dice1 from '../images/dice1.png';
import dice2 from '../images/dice2.png';
import dice3 from '../images/dice3.png';
import dice4 from '../images/dice4.png';
import dice5 from '../images/dice5.png';
import dice6 from '../images/dice6.png';


// Dice component with two props: side and locked
// This will allow us to create a player state object which better represents the players state. Something along the lines of:
// const [playerState, setPlayerState] = useState({ dice: [ {side: 1, locked: true },  ... and so on for the other dice ] 

function Dice(props) {
    var allDiceSides = [dice1, dice2, dice3, dice4, dice5, dice6]
    return <img src={allDiceSides[props.side]} className={props.locked ? "locked" : "not-locked"} alt="dice"></img>

}

export default Dice;