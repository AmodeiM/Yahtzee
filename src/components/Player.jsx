import React, { useState } from "react";
import Dice from "./Dice";

function Player() {

    function getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        return randomNumber;
    }

    const [playerState, setPlayerState] = useState({
        dice: [
            { id: 1, side: 1, locked: false },
            { id: 2, side: 1, locked: false },
            { id: 3, side: 1, locked: false },
            { id: 4, side: 1, locked: false },
            { id: 5, side: 1, locked: false },
        ],
    });

    const toggleDiceLock = (id) => {
        let newDice = [...playerState.dice];
        const diceToChange = newDice.find((die) => die.id == id);
        diceToChange.locked = !diceToChange.locked;
        setPlayerState({ dice: newDice });
    };

    const diceList = playerState.dice.map((die) => (
        <Dice
            id={die.id}
            side={die.side}
            locked={die.locked}
            key={die.id}
            toggleLock={toggleDiceLock}
        />
    ));

    const rollDice = () => {
        let allDice = [...playerState.dice];
        allDice.forEach(die => {
            if (die.locked === false) {
                die.side = getRandomNumber()
            }
        })
        setPlayerState({ dice: allDice })
    }

    return <div>{diceList}
        <button onClick={rollDice}>Roll</button></div>;
}
export default Player;
