import React, { useState } from "react";
import Dice from "./Dice";
import RollCounter
    from "./RollCounter";
import TurnCounter from "./TurnCounter";



function Player() {

    const [rollCount, setRollCount] = useState(1);
    const [turnCount, setTurnCount] = useState(1);

    function getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        return randomNumber;
    }

    function checkCounts(turnCount, rollCount) {
        return turnCount < 14 && rollCount < 4
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
        const diceToChange = newDice.find((die) => die.id === id);
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
        //TODO: Restrict player from rolling if all dice are locked

        //check if the player still has turns left
        //check to make sure player still has at least one roll left during current turn
        if (checkCounts(turnCount, rollCount)) {
            setPlayerState({
                dice:
                    [...playerState.dice].map(d => ({
                        ...d,
                        side: d.locked ? d.side : getRandomNumber()
                    })
                    )
            });
            setRollCount(rollCount + 1)

            //end of turn
            if (rollCount === 3) {
                setTurnCount(turnCount + 1);
                setRollCount(1)
                if (turnCount === 13) {
                    //End of game
                    setRollCount(1);
                    setTurnCount(1);
                }
            }

        }

    }

    return <div>

        {diceList}
        <button onClick={rollDice}>Roll</button>
        <RollCounter
            rollCount={rollCount}
        />
        <TurnCounter turnCount={turnCount} />
    </div>;
}
export default Player;
